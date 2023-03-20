import getAllProductQuery from "../utils/queries/get-all-products"
import fetchApi from "../utils/fetch-api"

  const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({query: getAllProductQuery})
    return products.data
  }
  
  export default getAllProducts