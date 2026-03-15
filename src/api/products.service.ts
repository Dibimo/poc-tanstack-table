import { computed } from 'vue'
import { useInfiniteQuery } from '@tanstack/vue-query'
import { http } from './http'
import type { Product, ProductsResponse } from './types/product'

const PAGE_SIZE = 20

const getPage = async (skip: number): Promise<ProductsResponse> => {
  const { data } = await http.get<ProductsResponse>('/products', { params: { skip, limit: PAGE_SIZE } })
  return data
}

export const productsService = {
  useInfiniteProducts() {
    const query = useInfiniteQuery({
      queryKey: ['products'],
      queryFn: ({ pageParam }) => getPage(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const nextSkip = lastPage.skip + lastPage.limit
        return nextSkip < lastPage.total ? nextSkip : undefined
      },
    })

    const products = computed<Product[]>(() =>
      query.data.value?.pages.flatMap(page => page.products) ?? []
    )

    return { ...query, products }
  },

  async getById(id: number): Promise<Product> {
    const { data } = await http.get<Product>(`/products/${id}`)
    return data
  },
}
