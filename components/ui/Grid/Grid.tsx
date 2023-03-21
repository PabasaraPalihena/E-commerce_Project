import { FC } from "react"

interface Props {
    children: React.ReactNode;
  }
  
const Grid: FC<Props> = ({children}) => {

  return (
    <div className="root-grid">
      {children}
    </div>
  )
}

export default Grid