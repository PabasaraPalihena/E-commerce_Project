import { ReactNode, FC, useRef, useEffect } from "react"
import s from "./Marquee.module.css"

interface Props {
  children: ReactNode[]
  direction?: "left" | "right"
}

const Marquee: FC<Props> = ({ children, direction = "left" }) => {
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
    <div className={s.root}>
      <div className={s.container} ref={containerRef}>
        {children}
      </div>
    </div>
  )
}

export default Marquee
