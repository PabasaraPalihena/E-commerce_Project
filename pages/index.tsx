import type { InferGetServerSidePropsType } from "next"
import getAllPoducts from "@/framework/shopify/product/get-all-products"

export async function getStaticProps(){
  const products = await getAllPoducts()

  return{
    props:{
      products
    },
    revalidate: 4*60*60
  }
}

export default function Home({products}:InferGetServerSidePropsType<typeof getStaticProps>) {

  return (
      <div>
        {products}
      </div>
  )
}
