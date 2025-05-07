import { createContext } from "react";
import { products, categoryArr, carouselVideo, reviews } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const rating = reviews.rating;
    const currency = '₹';
    const percent = '%';
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating); 
    

    
    const value ={
        products, currency, percent, categoryArr, carouselVideo, filledStars, emptyStars, reviews
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

