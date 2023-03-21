
import React,{ FC } from "react"
import s from "./Layout.module.css"

interface Props {
    children: React.ReactNode;
  }

const Layout: FC<Props> = ({ children })  => {
  return (
    <div className={s.root}>
    <main className="fit">
      { children }
    </main>
  </div>
  )
}

export default Layout