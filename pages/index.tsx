import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '../components/layout/ShopLayout'
import { ProductList } from '../components/products/ProductList'
import { initialData } from '../database/products'

const Home: NextPage = () => {
  return (
    <ShopLayout title={"Teslo-Shop - Home"} pageDescription={"Find the best products"}>
      <Typography variant="h1">Shop</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>All products</Typography>
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  )
}

export default Home
