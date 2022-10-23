import Image from 'next/image'
import Link from 'next/link'
// import React, { useRef } from 'react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { MainLayout } from '../../components/layout/MainLayout'
import { quitarProducto } from '../../features/carrito/cartSlice'

const MiCarrito = () => {

    // const ref = useRef()
    // console.log(ref)
    const dispatch = useAppDispatch()
    const cartArray = useAppSelector((state) => state.carrito.data)

    const handleRemove = (e: any) => {
        dispatch(quitarProducto({
            id: e.target.value
        }))
    }

    return (
        <MainLayout title='Mi Carrito'>
            <>
                {
                    (cartArray.length <= 0) ?
                        (
                            <div className='cart__content'>
                                <h2>Tu carrito de compras esta vacío</h2>
                            </div>
                        )
                        :
                        (
                            <div className='cart__content'>
                                {
                                    cartArray.map((item: any) => (
                                        <div key={item.id} className="product__item">
                                            <div className='item__image'>
                                                <Link href={`./producto/${item.id}`} >
                                                    <Image placeholder="blur" blurDataURL={item.url_image} src={item.url_image} alt={item.product_name} width="100" height="100" />
                                                </Link>
                                            </div>
                                            <div className='item__description' >
                                                <h2> {item.item} x {item.product_name} </h2>
                                                <p> Total: {`$${item.price}`} </p>
                                            </div>
                                            <div className='item__remove' >
                                                <button
                                                    onClick={handleRemove}
                                                    value={item.id}
                                                >
                                                    Eliminar del carrito
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }

            </>
        </MainLayout>
    )
}

export default MiCarrito
