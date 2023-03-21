import { AppProps } from "next/app"
import { Layout } from "@components/common"
import React,{ FC } from "react"
import "@assets/main.css"

interface Props {
    children: React.ReactNode;
  }
  
const Noop: FC<Props> = ({children}) => <>{children}</>

  function MyApp({ Component, pageProps }: AppProps & { Component: { Layout?: FC } }) {
  const LayoutComponent = Component.Layout ?? Layout;

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
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