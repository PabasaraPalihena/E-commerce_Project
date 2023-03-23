import { AppProps } from "next/app"
import { Layout } from "@components/common"
import React,{ FC } from "react"
import { UIProvider } from "@components/ui/context"
import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'

interface Props {
    children: React.ReactNode;
  }
  
const Noop: FC<Props> = ({children}) => <>{children}</>

  function MyApp({ Component, pageProps }: AppProps & { Component: { Layout?: FC } }) {
  const LayoutComponent = Component.Layout ?? Layout;

  return (
    <UIProvider>
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
    </UIProvider>
  );
}


export default MyApp

// import { AppProps } from "next/app"

// function MyApp({Component, pageProps}: AppProps) {
//   return (
//     <>
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default MyApp