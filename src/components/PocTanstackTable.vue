<script lang="ts" setup>
import { ref } from 'vue'
import CpfCell from './CpfCell.vue'
import DataTable from './DataTable/DataTable.vue'
import type { DataTableAction, ColumnDefinition } from './DataTable/DataTableProps'


type Dev = {
    id: number,
    name: string,
    age: number,
    cpf: string
}

const devs: Dev[] = [
  {
    id: 1,
    name: 'Digo',
    age: 24,
    cpf: '12345678900'
  },
  {
    id: 2,
    name: 'Carolzinha',
    age: 30,
    cpf: '12345678900'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 40,
    cpf: '12345678900'
  },
  {
    id: 4,
    name: 'Pitas',
    age: 15,
    cpf: '12345678900'
  },
  {
    id: 5,
    name: 'Vitinho',
    age: 24,
    cpf: '12345678900'
  }
]

const data = ref(devs)


const myColumns: ColumnDefinition<Dev>[] = [
  {
    header: 'Id',
    accessorKey: 'id'
  },
  {
    header: 'Nome',
    accessorKey: 'name'
  },
  {
    header: 'Age',
    accessorKey: 'age'
  },
  {
    header: 'CPF',
    accessorKey: 'cpf',
    customElement: CpfCell
  }
]

const actions: DataTableAction<Dev>[] = [
  {
    label: 'Edit',
    onClick: (row: Dev) => console.log(row)
  },
  {
    label: 'Delete',
    onClick: (row: Dev) => console.log(row)
  }
]

const addData = () => {
  data.value = [
    ...data.value,
    {
      id: 6,
      name: 'Vitinho',
      age: 24,
      cpf: '12345678900'
    }
  ]
}


</script>

<template>
  <h1>POC Tanstack Table</h1>
  <button @click="addData">adicionar</button>
  <div class="componente-table">
    <DataTable
      :columns="myColumns"
      :data="data"
      :actions="actions"
    />
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
