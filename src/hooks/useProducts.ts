import { useEffect, useState } from 'react'
import { getProducts } from '../services/getProducts'

import type { IProduct } from '../types/productsType'

interface IProductsState {
  products: IProduct[]
  loading: boolean
  error: string | null
}

const initialProductsState: IProductsState = {
  products: [],
  loading: true,
  error: null,
}

export const useProducts = () => {
  const [productsData, setProductsData] =
    useState<IProductsState>(initialProductsState)

  useEffect(() => {
    getProducts()
      .then(({ products }) => {
        setProductsData({
          products,
          loading: false,
          error: null,
        })
      })
      .catch((err) => {
        setProductsData({
          products: [],
          loading: false,
          error: err.message,
        })
      })
  }, [])

  return productsData
}
