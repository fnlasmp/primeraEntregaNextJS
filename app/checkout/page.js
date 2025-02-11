const CheckoutPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Finalizar Compra</h1>
            {/* Aquí podrías agregar más detalles como dirección de envío, métodos de pago, etc. */}
            <div className="mt-4">
                <p>Este es el resumen de tu pedido.</p>
                {/* Aquí podrías mapear y mostrar los productos del carrito */}
            </div>
        </div>
    )
}

export default CheckoutPage
