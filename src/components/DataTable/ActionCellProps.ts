import type { DataTableAction } from "./DataTableProps"

export default interface ActionCellProps<T> {
  actions?: DataTableAction<T>[]
  row: T
}
