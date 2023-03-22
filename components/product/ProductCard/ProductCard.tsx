import { Product } from "@common/types/product"
import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import s from "./ProductCard.module.css"

interface Props {
  product: Product
  variant?: "simple" | "slim"
}

const placeholderImage = "/product-image-placeholder.svg"
const ProductCard: FC<Props> = ({product, variant = "simple"}) => {

  return (
    <Link href={`/products/${product.slug}`} className={s.root}>
      { variant === "slim" ?
          <>SLIM PRODUCT</> : (
          <>
      <div className={s.productBg}></div>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={s.productPrice}>
          {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        { product.images && (
          <Image
            alt={product.name ?? "Product image"}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={900}
            quality="85"
            className={s.productImage}
            layout="relative"
          />
        )
        }
        </>
          )
        }
    </Link>
  )
}

export default ProductCard