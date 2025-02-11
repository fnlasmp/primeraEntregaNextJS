"use client";
import db from "@/app/context/firebaseConfig";
import { Suspense, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCard from "./ProductCard";

const ProductsListClient = ({ categoria }) => {
    const { getProducts } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                
                const allProducts = await getProducts();
                const filteredProducts = allProducts.filter(
                    (product) => product.categoria === categoria
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoria, getProducts]);

   
    if (!products || products.length === 0) {
        return (
            <div className="container m-auto text-center py-10">
                <h2 className="text-xl">No hay productos en esta categoría</h2>
            </div>
        );
    }

    return (
        <Suspense fallback={<div>Cargando productos...</div>}>
            <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </section>
        </Suspense>
    );
};

export default ProductsListClient;
