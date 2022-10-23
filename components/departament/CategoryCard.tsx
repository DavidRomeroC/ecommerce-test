import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useState } from 'react';

interface PropsCard {
    filtredData: any;
    isActive: any;
}

export const CategoryCard: FC<PropsCard> = ({ filtredData, isActive }) => {

    

    return (
        <>
            {
                filtredData.slice(0, (isActive ? 3 : filtredData.lenght)).map((product: any) => (
                    <Link key={product.id} href={`./departamento/${product.product_category}`}>
                        <div className="card__content">
                            <Image placeholder="blur" blurDataURL={product.url_image} src={product.url_image} alt={product.product_name} width="200" height="200" />
                            <h3> {product.product_category.toUpperCase()} </h3>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}
