import { PRODUCTS_URL } from '../config/services'
import type { IProduct } from '../types/productsType'

export const getProducts = async () => {
  console.log(PRODUCTS_URL)

  const products = await fetch(`${PRODUCTS_URL}/product`)
    .then((res) => res.json())
    .then((products: IProduct[]) => products)

  return {
    products,
  }
}
