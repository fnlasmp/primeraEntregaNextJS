"use client";
import { createContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db  from "./firebaseConfig";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //Provider
     const addToCart = (product) => {
        console.log('Producto agregado:', product); // Verifica si se está ejecutando
        setCart((prevCart) => [...prevCart, product]);
    };
    
    

    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };


    //crear una collecion para nuestra base de datos --> Hicimos una referencia a nuestra base de datos
    const collectionRef = collection(db, "products");


    //obtener los datos de nuestra base de datos
    const getProducts = async () => {
        const snapshot = await getDocs(collectionRef);
        const products = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        return products;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getProducts }}>
            {children}
        </CartContext.Provider>
    )
};