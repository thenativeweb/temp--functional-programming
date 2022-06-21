# Ebenen der Programmierung

## Grundbausteine

- Haben alle einen Wert
  - Weil man sie auswerten kann ("evaluate"), spricht man von Ausdrücken ("expressions")

- `23`
- `-7`
- `3.141592654`
- `'a'`
- `true`
- `false`
- ...

=> Alles lässt sich auf Zahlen zurückführen

## Kombinationen von Grundbausteinen

- Haben alle einen Wert
  - Sind ebenfalls Ausdrücke ("expressions")

- `23 + 42`
- `23 - 42`
- `23 + 42 * 7`
- `(23 + 42) * 7`

## Abstraktion

- Spezialfälle `const`, `=` (Zuweisung), `function`, `return`
  - Haben alle jeweils keinen Wert an sich
  - Deshalb sind sie auch keine Expressions, sondern Anweisungen ("statements")

- `const pi = 3.141592654`
- `const radius = 10`
- `const area = pi * radius * radius`

```
const pi = 3.141592654;

function add (left, right) {
  return left + right;
}

function power (value, exponent) {
  return value ** exponent;
}

function area (radius) {
  return pi * power(radius, 2);
}
```
