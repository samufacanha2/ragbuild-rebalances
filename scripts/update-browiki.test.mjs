import assert from "node:assert/strict";
import test from "node:test";
import { classEntryFromPage, parseClassSkillLinks, parseSkillIdentity, selectSkillLinks } from "./update-browiki.mjs";

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
  const skills = { 5205: { url: 'https://browiki.org/wiki/Demoli%C3%A7%C3%A3o_Alada' } };
  assert.deepEqual(selectSkillLinks(links, skills, false), ['/wiki/Outra']);
  assert.deepEqual(selectSkillLinks(links, skills, true), links);
});

test("failed class-page refresh retains its previously verified class", () => {
  const previous = { name: "Cavaleiros Draconianos", url: "https://browiki.org/wiki/Cavaleiros_Draconianos" };
  assert.deepEqual(classEntryFromPage("Cavaleiros Draconianos", "/wiki/Cavaleiros_Draconianos", null, previous), previous);
  assert.deepEqual(classEntryFromPage("Cavaleiros Draconianos", "/wiki/Cavaleiros_Draconianos", "<html>missing skill table</html>", previous), previous);
});
