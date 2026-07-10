import './TextBlockStyles.css'

export function TextBlock({ text }) {
  return (
    <>
      {String(text ?? '')
        .split('\n')
        .map((line, index, lines) => (
          <span key={`${line}-${index}`}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
    </>
  )
}
