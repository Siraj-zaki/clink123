import {ADD_TO_CART} from "./../constants";
const initialstate={
    cardData=[]
}
export default function cardItems(state=initialstate,action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state

    }

}