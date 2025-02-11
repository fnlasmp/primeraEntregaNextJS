'use client'
import { useContext } from "react"
import { CartContext } from "@/app/context/CartContext"
import Link from "next/link"

const CartPage = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-xl font-bold">Tu carrito está vacío</h2>
                <Link href="/">
                    <span className="mt-4 text-blue-500 hover:underline">Volver a la tienda</span>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Tu Carrito</h1>
            <div className="mt-4">
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p>$ {item.price}</p>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold " >{item.title}</h3>
                                <p>  { item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-right">
                <Link href="/checkout">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Ir a pagar</span>
                </Link>
            </div>
        </div>
    )
}

export default CartPage
