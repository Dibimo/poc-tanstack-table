<script lang="ts" setup>
defineProps<{ value: string }>()
</script>

<template>
  <img :src="value" class="w-10 h-10 rounded object-cover" />
</template>
