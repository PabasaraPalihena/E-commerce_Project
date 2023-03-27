import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem

export const handler:MutationHook = {
  
  fetcherOptions: {
    query: `query { hello }`
  },
  fetcher: async ({fetch, options, input}) => {

    const variables = {
      checkoutId: null,
      lineItems: [
        {
         variantId: input.variantId,
         quantity: 1
        }
      ]
    }

    debugger
    const response = await fetch({
      ...options,
      variables
    })
    return response
  },
  useHook: ({fetch}) => {
    return async (input: any) => {
      const response = await fetch(input)
            return {
              output: response
            }
          }
    }
}