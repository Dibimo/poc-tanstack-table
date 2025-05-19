<script setup lang="ts" generic="T">
import type ActionCellProps from './ActionCellProps';


defineProps<ActionCellProps<T>>()

</script>

<template>
  <div class="actions">
    <button v-for="a in actions" @click="a.onClick(row)"> {{ a.label }} </button>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  gap: 10px;
}
</style>
