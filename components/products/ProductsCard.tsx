import Image from "next/image";
import Link from "next/link";
import { FC } from "react"

interface PropsProducts {
    filtredData: any;
}

export const ProductsCard: FC<PropsProducts> = ({ filtredData }) => {
    return (
        <div className="products__content">
            {
                filtredData.map((product: any) => (
                    <Link href={`./producto/${product.id}`} key={product.id} >
                        <div className="product__content">
                            <Image placeholder="blur" blurDataURL={product.url_image} src={product.url_image} alt={product.product_name} width="200" height="200" />
                            <hr />
                            <div className="description__product-content">
                                <h2> {product.product_name} </h2>
                                <h3> {`$${product.price}`} </h3>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
