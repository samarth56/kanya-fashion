import { createContext } from "react";
import { products, categoryArr, carouselVideo } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    
    const currency = '₹';
    const percent = '%';
    

    
    const value ={
        products, currency, percent, categoryArr, carouselVideo
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

