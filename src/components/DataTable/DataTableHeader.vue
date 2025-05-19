<script setup lang="ts" generic="T">
import { FlexRender, type Table } from '@tanstack/vue-table';


defineProps<{ table: Table<T> }>()

</script>


<template>
  <thead>
    <tr>
      <th
        v-for="c in table.getLeftLeafColumns()"
        :key="c.id"
        :style="{ width: c.getSize() + 'px' }"
        data-pinned="left"
      >
        <FlexRender :render="c.columnDef.header" />
      </th>

      <th
        v-for="c in table.getCenterLeafColumns()"
        :key="c.id"
        :style="{ width: c.getSize() + 'px' }"
      >
        <FlexRender :render="c.columnDef.header" />
      </th>

      <th
        v-for="c in table.getRightLeafColumns()"
        :key="c.id"
        :style="{ width: c.getSize() + 'px' }"
        data-pinned="right"
      >
        <FlexRender :render="c.columnDef.header" />
      </th>
    </tr>
  </thead>
</template>

<style scoped>
</style>
