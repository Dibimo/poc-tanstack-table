<script setup lang="ts" generic="T">
import { FlexRender, type Table } from '@tanstack/vue-table';


defineProps<{ table: Table<T> }>()

</script>

<template>
  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
    <tr
      v-for="row in table.getRowModel().rows"
      :key="row.id"
      class="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150"
    >
      <td
        v-for="cell in row.getLeftVisibleCells()"
        :key="cell.id"
        data-pinned="left"
        class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap"
      >
        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
      </td>

      <td
        v-for="cell in row.getCenterVisibleCells()"
        :key="cell.id"
        class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap"
      >
        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
      </td>

      <td
        v-for="cell in row.getRightVisibleCells()"
        :key="cell.id"
        data-pinned="right"
        class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap"
      >
        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
      </td>
    </tr>
  </tbody>
</template>
