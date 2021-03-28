import {ADD_TO_CART,LOGIN_USER1} from "../../constants";
const initialstate={
    cardData:[],

    name:"junaid"
}
export default function cardItems(state=initialstate,action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData:action.data
            }
            break;
            case LOGIN_USER1:
                return{
                    ...state,
                    cardData:action.payload
                }
                break;
            default:
                return state

    }

}