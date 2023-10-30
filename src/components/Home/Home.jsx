import React from "react";
import { ProductsCard } from "../productsCard/productsCard";
import { ProductsData } from '../productsData/productsData'
export const Home = () => {
    return (
        <div className="Home">
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {ProductsData.map((item) => (
                            <ProductsCard key={item.id} {...item}/>    
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}