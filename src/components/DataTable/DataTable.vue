<script setup lang="ts" generic="T">
import { createColumnHelper, getCoreRowModel, useVueTable, type CellContext } from '@tanstack/vue-table';
import { type ColumnDefinition, type DataTableProps } from './DataTableProps';
import { h } from 'vue';
import DataTableHeader from './DataTableHeader.vue';
import DataTableBody from './DataTableBody.vue';
import ActionCell from './ActionCell.vue';


const props = defineProps<DataTableProps<T>>()

const columnHelper = createColumnHelper<T>()

const mountCell = (columnDefinition: ColumnDefinition<T>,cell: CellContext<T, unknown>) => {
  if(columnDefinition.customElement)
    return h(columnDefinition.customElement, { value: cell.getValue() })

  return cell.getValue()
}

const columns: any = props.columns.map(column =>
  columnHelper.accessor(column.accessorKey as any, {
    header: column.header,
    cell: (info) => mountCell(column, info)
}))

if(props.actions && props.actions.length > 0) {
  columns.push(
    columnHelper.display({
      id: 'actions',
      header: 'Ações',
      cell: (info) => h(ActionCell, { actions: props.actions as any, row: info.row.original })
    })
  )
}


const tableApi = useVueTable({
  columns,
  getCoreRowModel: getCoreRowModel(),

  initialState: {
    columnPinning: {
      right: ['actions']
    }
  },


  get data(){
    return props.data
  }
})

const emits = defineEmits(['scroll-end'])

const emitsScrollEnd = () => {
  emits('scroll-end')
}


</script>

<template>
  <div class="rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <div class="overflow-auto h-full" v-scroll-end="emitsScrollEnd">
      <table class="w-full text-sm border-collapse">
        <DataTableHeader :table="tableApi" />
        <DataTableBody :table="tableApi" />
      </table>
    </div>
  </div>
</template>
