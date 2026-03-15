<script lang="ts" setup>
import { ref } from 'vue'
import DataTable from './DataTable/DataTable.vue'
import type { ColumnDefinition } from './DataTable/DataTableProps'
import { productsService } from '../api/products.service'
import type { Product } from '../api/types/product'

const isDark = ref(false)

const columns: ColumnDefinition<Product>[] = [
  { header: 'ID', accessorKey: 'id' },
  { header: 'Título', accessorKey: 'title' },
  { header: 'Categoria', accessorKey: 'category' },
  { header: 'Preço', accessorKey: 'price' },
  { header: 'Estoque', accessorKey: 'stock' },
  { header: 'Avaliação', accessorKey: 'rating' },
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const { products, fetchNextPage, hasNextPage } = productsService.useInfiniteProducts()

const onScrollEnd = () => {
  if (hasNextPage.value) fetchNextPage()
}

</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 h-full">
    <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-2 h-full">

      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
          Produtos
        </h1>

        <button
          @click="toggleTheme"
          class="flex items-center gap-2 px-4 py-2  rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 cursor-pointer"
        >
          <span v-if="isDark">☀️ Tema claro</span>
          <span v-else>🌙 Tema escuro</span>
        </button>
      </div>

      <DataTable
        @scroll-end="onScrollEnd"
        :columns="columns"
        :data="products"
        class="h-full flex-1 min-h-0"
      />

    </div>
  </div>
</template>
