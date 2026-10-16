import './InitialSkillValuesStyles.css'
import { translateSpecLabel, translateSpecValue } from '../../lib/translations.js'

export function InitialSkillValues({ rows, language }) {
  return (
    <dl className="initial-skill-values">
      {rows.map((row) => (
        <div className={row.label === 'Damage Formula' ? 'initial-skill-value is-formula' : 'initial-skill-value'} key={row.label}>
          <dt>{translateSpecLabel(row.label, language)}</dt>
          <dd>{language === 'pt-BR' && row.valuePtBr ? row.valuePtBr : translateSpecValue(row.value, language)}</dd>
        </div>
      ))}
    </dl>
  )
}
