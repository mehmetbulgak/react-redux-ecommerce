import { useState } from "react";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import SliderComponent from "../components/home/SliderComponent";
import Sorting from "../components/home/Sorting";

function Home() {

    const [rating, setRating] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div>
            <SliderComponent />
            <Sorting setRating={setRating} setPriceRange={setPriceRange} />
            <div className="category-products-container">
                <Category setCategory={setCategory} />
                <Products category={category} rating={rating} priceRange={priceRange} />
            </div>
        </div>
    );
}

export default Home;
