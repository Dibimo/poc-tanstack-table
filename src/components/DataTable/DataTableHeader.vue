<script setup lang="ts" generic="T">
import { FlexRender, type Table } from '@tanstack/vue-table';


defineProps<{ table: Table<T> }>()

</script>


<template>
  <thead class="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider sticky top-0 z-10">
    <tr>
      <th
        v-for="c in table.getLeftLeafColumns()"
        :key="c.id"
        :style="{ width: c.getSize() + 'px' }"
        data-pinned="left"
        class="px-4 py-3 text-left font-semibold"
      >
        <FlexRender :render="c.columnDef.header" />
      </th>

      <th
        v-for="c in table.getCenterLeafColumns()"
        :key="c.id"
        :style="{ width: c.getSize() + 'px' }"
        class="px-4 py-3 text-left font-semibold"
      >
        <FlexRender :render="c.columnDef.header" />
      </th>

      <th
        v-for="c in table.getRightLeafColumns()"
        :key="c.id"
        :style="{ width: c.getSize() + 'px' }"
        data-pinned="right"
        class="px-4 py-3 text-left font-semibold"
      >
        <FlexRender :render="c.columnDef.header" />
      </th>
    </tr>
  </thead>
</template>
