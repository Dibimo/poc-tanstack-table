<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import DataTable from './DataTable/DataTable.vue'
import type { ColumnDefinition } from './DataTable/DataTableProps'
import { productsService } from '../api/products.service'
import type { Product } from '../api/types/product'

const data = ref<Product[]>([])

const columns: ColumnDefinition<Product>[] = [
  { header: 'ID', accessorKey: 'id' },
  { header: 'Título', accessorKey: 'title' },
  { header: 'Categoria', accessorKey: 'category' },
  { header: 'Preço', accessorKey: 'price' },
  { header: 'Estoque', accessorKey: 'stock' },
  { header: 'Avaliação', accessorKey: 'rating' },
]

onMounted(async () => {
  const response = await productsService.getAll()
  data.value = response.products
})
</script>

<template>
  <h1>POC Tanstack Table</h1>
  <div class="componente-table">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>

<style scoped>
.componente-table {
  background-color: #a0a0a0;
  overflow: scroll;
}

.componente-table table {
  border-collapse: collapse;
}

th[data-pinned="right"],
td[data-pinned="right"] {
  position: sticky;
  right: 0;
  background: tomato;
  z-index: 2;
  padding: 0;
}
</style>
