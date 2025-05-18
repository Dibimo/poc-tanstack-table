<script lang="ts" setup>
import { computed } from 'vue';

const { value } = defineProps<{ value: string }>()

const displayValue = computed(() => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
})
</script>

<template>
    <span>{{ displayValue }}</span>
</template>

<style scoped>
</style>
