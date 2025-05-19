import type { Component } from "vue";

export interface ColumnDefinition<T> {
  customElement?: Component,
  accessorKey: keyof T | ((row: T) => unknown),
  header: string

}

export interface DataTableAction<T> {
  label: string,
  onClick: (row: T) => void
}

export interface DataTableProps<T> {
  columns: Array<ColumnDefinition<T>>,
  data: T[]
  actions?: Array<DataTableAction<T>>
}
