import { http } from './http'
import type { Product, ProductsResponse } from './types/product'

export const productsService = {
  async getAll(): Promise<ProductsResponse> {
    const { data } = await http.get<ProductsResponse>('/products')
    return data
  },

  async getById(id: number): Promise<Product> {
    const { data } = await http.get<Product>(`/products/${id}`)
    return data
  },
}
