import { AppProps } from "next/app"
import { Layout } from "@components/common"
import { FC } from "react"

interface Props {
    children: React.ReactNode;
  }
  
const Noop: FC<Props> = ({children}) => <>{children}</>
function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC<Props>}}) {
  const Layout = Component.Layout ?? Noop

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
}

export default MyApp