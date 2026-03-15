<script lang="ts" setup>
import { computed } from 'vue'

const { value } = defineProps<{ value: number }>()

const MAX = 5
const PRECISION = 10 // 1 decimal place

const stars = computed(() => {
  return Array.from({ length: MAX }, (_, i) => {
    const fill = Math.min(1, Math.max(0, Math.round((value - i) * PRECISION) / PRECISION))
    if (fill >= 1) return 'full'
    if (fill >= 0.5) return 'half'
    return 'empty'
  })
})
</script>

<template>
  <span class="flex items-center gap-0.5">
    <span v-for="(star, i) in stars" :key="i">
      <svg v-if="star === 'full'" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg v-else-if="star === 'half'" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <defs>
          <linearGradient :id="`half-${i}`">
            <stop offset="50%" stop-color="currentColor" />
            <stop offset="50%" stop-color="#D1D5DB" />
          </linearGradient>
        </defs>
        <path :fill="`url(#half-${i})`" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg v-else class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
    <span class="ml-1 text-xs text-gray-500 dark:text-gray-400">{{ value.toFixed(1) }}</span>
  </span>
</template>
