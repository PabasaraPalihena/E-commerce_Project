import React, { FC, Children, isValidElement } from "react"
import s from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"

interface Props {
    children: React.ReactNode;
  }

const ProductSlider: FC<Props> = ({children}) => {

  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged() {
      console.log("changing to slide")
    },
  })

  return (
    <div className={s.root}>
     <div ref={sliderRef as any} className="keen-slider h-full transition-opacity">
      { Children.map(children, child => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`
              }
            }
            // return React.cloneElement(child, { className: "keen-slider__slide" } as React.HTMLAttributes<HTMLElement>);

          }

          return child
        }
        )}
      </div>
    </div>
  )
}

export default ProductSlider