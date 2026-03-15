<script lang="ts" setup>
import { computed } from 'vue'
import { formatBRL } from '../../../utils/currency'

const { value } = defineProps<{ value: number }>()

const formatted = computed(() => formatBRL(value))
</script>

<template>
  <span class="font-medium text-gray-800 dark:text-gray-200">{{ formatted }}</span>
</template>
