export type ApiFetcherOptions = {
    url: string
    query: string
    variables?: Variables
  }
  
  export type ApiFetcherResults<T> = {
    data: T
  }
  export type Variables = {[key: string]: string | undefined}
  
  export interface ApiConfig {
    apiUrl: string
    fetch<T>(
      options: ApiFetcherOptions
    ): Promise<ApiFetcherResults<T>>
  }