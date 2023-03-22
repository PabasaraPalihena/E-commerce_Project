import { ReactNode, FC, useRef, useEffect } from "react"
import s from "./Marquee.module.css"
import cn from "classnames"

interface Props {
  children: ReactNode[]
  variant?: "primary" | "secondary"
  direction?: "left" | "right"
}

const Marquee: FC<Props> = ({ children, direction = "left", variant = "primary" }) => {

  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: variant === "secondary"
    }
  )

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const containerWidth = container?.offsetWidth
    const animationDuration = containerWidth ? containerWidth * 0.03 : 0

    const keyframes = `@keyframes marquee {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(${direction === "left" ? "-100" : "100"}%);
      }
    }`

    const style = document.createElement("style")
    style.appendChild(document.createTextNode(keyframes))
    document.head.appendChild(style)

    container?.style.setProperty("animation", `marquee ${animationDuration}s linear infinite`)
  }, [direction])

  return (
    <div className={rootClassName}>
      <div className={s.container} ref={containerRef}>
        {children}
      </div>
    </div>
  )
}

export default Marquee
