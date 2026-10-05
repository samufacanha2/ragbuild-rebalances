import assert from "node:assert/strict";
import test from "node:test";
import { classEntryFromPage, parseClassSkillLinks, parseSkillDescription, parseSkillIdentity, selectSkillLinks, standaloneSkillPaths } from "./update-browiki.mjs";

test("extracts only skill-table links from a class page", () => {
  const html = '<a href="/wiki/Unrelated">Unrelated</a><h2><span id="Habilidades">Habilidades</span></h2><table><tr><td><a href="/wiki/Demoli%C3%A7%C3%A3o_Alada" title="Demolição Alada"><img src="x"></a></td><td><a href="/wiki/Demoli%C3%A7%C3%A3o_Alada">Demolição Alada</a></td></tr></table><h2>Other</h2><a href="/wiki/Other">Other</a>';
  assert.deepEqual(parseClassSkillLinks(html), ['/wiki/Demoli%C3%A7%C3%A3o_Alada']);
});

test("accepts a skill page only when its ID and title are present", () => {
  const html = '<h1 id="firstHeading"><span class="mw-page-title-main">Demolição Alada</span></h1><td><b>ID</b></td><td><small>DK_SERVANT_W_DEMOL (5205)</small></td>';
  assert.deepEqual(parseSkillIdentity(html, '/wiki/Demoli%C3%A7%C3%A3o_Alada'), { id: 5205, name: 'Demolição Alada', url: 'https://browiki.org/wiki/Demoli%C3%A7%C3%A3o_Alada' });
  assert.equal(parseSkillIdentity('<h1>Missing</h1>', '/wiki/Missing'), null);
});

test("refresh mode revisits known wiki pages while default reuses them", () => {
  const links = ['/wiki/Demoli%C3%A7%C3%A3o_Alada', '/wiki/Outra'];
  const skills = { 5205: { url: 'https://browiki.org/wiki/Demoli%C3%A7%C3%A3o_Alada', description: 'Causa dano físico.' } };
  assert.deepEqual(selectSkillLinks(links, skills, false), ['/wiki/Outra']);
  assert.deepEqual(selectSkillLinks(links, skills, true), links);
});

test("default update fetches verified wiki skills missing a Portuguese description", () => {
  const url = '/wiki/Demoli%C3%A7%C3%A3o_Alada';
  const skills = { 5205: { url: 'https://browiki.org/wiki/Demoli%C3%A7%C3%A3o_Alada' } };
  assert.deepEqual(selectSkillLinks([url], skills), [url]);
});

test("indexes the basic skill page absent from class skill tables", () => {
  assert.deepEqual(standaloneSkillPaths, ['/wiki/Habilidades_B%C3%A1sicas']);
});

test("default update revisits an incomplete description ending before its effect list", () => {
  const url = '/wiki/Habilidade';
  assert.deepEqual(selectSkillLinks([url], { 56: { url: 'https://browiki.org/wiki/Habilidade', description: 'Depende do alvo:' } }), [url]);
});

test("extracts only the Portuguese skill introduction after the infobox", () => {
  const html = '<div class="mw-parser-output"><table><tr><td><b>ID</b></td><td><small>DK_SERVANT_W_DEMOL (5205)</small></td></tr><tr><td><table><tr><td>Nested prerequisite</td></tr></table></td></tr></table>'
    + '<p>Comanda suas <a href="/wiki/Espada">Espadas</a> a voarem nos inimigos.</p><p>Causa dano físico na área de 13x13 células &amp; consome SP.</p>'
    + '<table class="wikitable"><tr><td>150%</td></tr></table><h2>Notas</h2><p>Não é a descrição.</p></div>';
  assert.equal(parseSkillDescription(html), 'Comanda suas Espadas a voarem nos inimigos.\nCausa dano físico na área de 13x13 células & consome SP.');
  assert.equal(parseSkillDescription('<div class="mw-parser-output"><p>Sem ficha da habilidade.</p></div>'), '');
});

test("includes an immediate effect list instead of leaving a dangling colon", () => {
  const html = '<table><tr><td><b>ID</b></td><td><small>SKILL (56)</small></td></tr></table>'
    + '<p>O golpe depende do tamanho do alvo:</p><ul><li>Pequeno: 1 golpe</li><li>Médio: 2 golpes</li><li>Grande: 3 golpes</li></ul>'
    + '<h2>Notas</h2><ul><li>Não incluir</li></ul>';
  assert.equal(parseSkillDescription(html), 'O golpe depende do tamanho do alvo:\n• Pequeno: 1 golpe\n• Médio: 2 golpes\n• Grande: 3 golpes');
});

test("includes the focus mechanic after an effect list but stops at the next table", () => {
  const html = '<table><tr><td><b>ID</b></td><td><small>SKILL (5408)</small></td></tr></table>'
    + '<p>A arma equipada altera a habilidade:</p><ul><li>Pistola: 6 projéteis.</li></ul>'
    + '<p>Consome Pontos de Foco para aumentar o dano.</p><table><tr><td>Fórmula</td></tr></table>'
    + '<p>Conteúdo não relacionado.</p>';
  assert.equal(parseSkillDescription(html), 'A arma equipada altera a habilidade:\n• Pistola: 6 projéteis.\nConsome Pontos de Foco para aumentar o dano.');
});

test("preserves inline wiki line breaks instead of joining adjacent words", () => {
  const html = '<table><tr><td><b>ID</b></td><td><small>SKILL (5406)</small></td></tr></table>'
    + '<p>Primeira frase.<br>Segunda frase.<br />Terceira frase.</p>';
  assert.equal(parseSkillDescription(html), 'Primeira frase.\nSegunda frase.\nTerceira frase.');
});

test("skips a wiki disambiguation notice before the actual description", () => {
  const html = '<table><tr><td><b>ID</b></td><td><small>SKILL (3027)</small></td></tr></table>'
    + '<div class="dablink"><b>Nota:</b> Para outro assunto, veja outro artigo.</div>'
    + '<p>Usa a ilusão da lua para alterar aleatoriamente o HP e o SP.</p><table class="wikitable"></table>';
  assert.equal(parseSkillDescription(html), 'Usa a ilusão da lua para alterar aleatoriamente o HP e o SP.');
});

test("drops a dangling materials-introduction when a wiki table follows", () => {
  const html = '<table><tr><td><b>ID</b></td><td><small>SKILL (496)</small></td></tr></table>'
    + '<p>Tenta criar 200 Poções Brancas.</p><p>Cada conjuração consome os materiais abaixo:</p><table class="wikitable"></table>';
  assert.equal(parseSkillDescription(html), 'Tenta criar 200 Poções Brancas.');
});

test("failed class-page refresh retains its previously verified class", () => {
  const previous = { name: "Cavaleiros Draconianos", url: "https://browiki.org/wiki/Cavaleiros_Draconianos" };
  assert.deepEqual(classEntryFromPage("Cavaleiros Draconianos", "/wiki/Cavaleiros_Draconianos", null, previous), previous);
  assert.deepEqual(classEntryFromPage("Cavaleiros Draconianos", "/wiki/Cavaleiros_Draconianos", "<html>missing skill table</html>", previous), previous);
});
