import { ADD_TO_CART } from "./../constants";
 
export const addtocart=(data)=>{
    return{
        type:ADD_TO_CART,
        data:data
    }

}