<script setup lang="ts" generic="T">
import { FlexRender, type Table } from '@tanstack/vue-table';


defineProps<{ table: Table<T> }>()

</script>

<template>
  <tbody>
    <tr
      v-for="row in table.getRowModel().rows"
      :key="row.id"
    >
      <td
        v-for="cell in row.getLeftVisibleCells()"
        :key="cell.id"
        data-pinned="left"
      >
        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
      </td>

      <td
        v-for="cell in row.getCenterVisibleCells()"
        :key="cell.id"
      >
        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
      </td>

      <td
        v-for="cell in row.getRightVisibleCells()"
        :key="cell.id"
        data-pinned="right"
      >
        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
      </td>


    </tr>
  </tbody>
</template>

<style scoped>
</style>
