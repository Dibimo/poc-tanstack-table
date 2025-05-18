<script lang="ts" setup>
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    createColumnHelper
} from '@tanstack/vue-table'
import { h, ref } from 'vue'
import CpfCell from './CpfCell.vue'


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
    age: 30,
    cpf: '12345678900'
  },
  {
    id: 2,
    name: 'Carolzinha',
    age: 25,
    cpf: '12345678900'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 35,
    cpf: '12345678900'
  },
  {
    id: 4,
    name: 'Pitas',
    age: 28,
    cpf: '12345678900'
  },
  {
    id: 5,
    name: 'Vitinho',
    age: 32,
    cpf: '12345678900'
  }
]

const data = ref(devs)

const columnHelper = createColumnHelper<Dev>()

const columns = [
  columnHelper.accessor('id', {
    header: 'Id',
    cell: (info) => info.getValue()
  }),

  columnHelper.accessor('age', {
    header: 'Idade',
    cell: (info) => info.getValue()
  }),

  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue()
  }),

  columnHelper.accessor('cpf', {
    header: 'CPF',
    cell: (info) => h(CpfCell, { value: info.getValue() })
  })
]

const table = useVueTable({
  initialState: {
    columnPinning: {
      right: ['id']
    }
  },

  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel()
})

</script>

<template>
  <h1>POC Tanstack Table</h1>
  <div class="componente-table">
    <table>

      <thead>
        <tr>
          <th v-for="c in table.getCenterLeafColumns()" :key="c.id" :style="{ width: c.getSize() + 'px' }">
            <FlexRender
              :render="c.columnDef.header"
            />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.componente-table {
  background-color: #a0a0a0;
  width: 90px;
  overflow: scroll;
}

.componente-table table {

}

</style>
