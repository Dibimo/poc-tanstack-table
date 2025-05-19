# Alternativas para renderização programática de células customizadas (mountCell) no DataTable

## Situação Atual

```typescript
const mountCell = (columnDefinition: ColumnDefinition<T>, cell: CellContext<T, unknown>) => {
  if (columnDefinition.customElement)
    return h(columnDefinition.customElement, { value: cell.getValue() })
  return cell.getValue()
}
```
- Simples e direto
- Permite customização básica

---

## Alternativa 1: Passar contexto completo

```typescript
const mountCell = (columnDefinition: ColumnDefinition<T>, cell: CellContext<T, unknown>) => {
  if (columnDefinition.customElement)
    return h(columnDefinition.customElement, {
      value: cell.getValue(),
      row: cell.row,
      cell, // contexto completo
      column: columnDefinition
    })
  return cell.getValue()
}
```
**Vantagens:**
- Mais flexível para componentes customizados
- Permite acessar mais informações na célula

---

## Alternativa 2: Permitir customização da função de montagem

```typescript
export interface ColumnDefinition<T> {
  customElement?: Component,
  customCellProps?: (cell: CellContext<T, unknown>) => Record<string, unknown>,
  accessorKey: keyof T | ((row: T) => unknown),
  header: string
}

const mountCell = (columnDefinition: ColumnDefinition<T>, cell: CellContext<T, unknown>) => {
  if (columnDefinition.customElement) {
    const extraProps = columnDefinition.customCellProps ? columnDefinition.customCellProps(cell) : {}
    return h(columnDefinition.customElement, {
      value: cell.getValue(),
      ...extraProps
    })
  }
  return cell.getValue()
}
```
**Vantagens:**
- Cada coluna pode customizar exatamente quais props recebe
- Máxima flexibilidade para integrações futuras

---

## Observações
- Padronize o que será passado para os componentes customizados para facilitar reuso.
- Documente as props esperadas pelos seus customElements.
- Considere sempre o contexto de uso: simplicidade x flexibilidade.

---

*Arquivo gerado automaticamente para referência futura.*
