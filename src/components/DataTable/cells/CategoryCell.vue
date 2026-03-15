<script lang="ts" setup>
defineProps<{ value: string }>()
</script>

<template>
  <span class="inline-flex flex-wrap gap-1">
    <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
      {{ value }}
    </span>
  </span>
</template>
