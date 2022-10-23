import Image from "next/image";
import { FC } from "react"
import { useState, useEffect } from 'react';
import { useAppDispatch } from "../../app/hooks";
import { agregarProducto } from "../../features/carrito/cartSlice";

interface PropsItemCard {
    filtredData: any;
}

export const ItemCard: FC<PropsItemCard> = ({ filtredData }) => {

    const [item, setItem] = useState<number>(0)
    const [isActive, setIsActive] = useState(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (item <= 0) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [item])

    const handleRemove = () => {
        setItem(item - 1)
    }

    const handleAdd = () => {
        setItem(item + 1)
    }

    const handleAddCart = () => {
        dispatch(agregarProducto({
            product_name,
            url_image,
            price: price * item,
            id,
            item,
        }))
    }

    const [{ url_image, product_name, product_description, price, id }] = filtredData;

    return (
        <div className="product__card">
            <Image placeholder="blur" blurDataURL={url_image} src={url_image} alt={product_name} width="200" height="200" />
            <div className="description__card" >
                <h2> {product_name} </h2>
                <p> {product_description} </p>
                <p> {`$${price}`} </p>
                <div className="add__cart-content" >
                    <div className="cart__add-quit">
                        <button
                            onClick={handleRemove}
                            disabled={isActive}
                            >
                            -1
                        </button>
                        <p> {item} </p>
                        <button
                            onClick={handleAdd}
                            >
                            +1
                        </button>
                    </div>
                    <button 
                    className="send__cart"
                    disabled={isActive}
                    onClick={handleAddCart}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}
