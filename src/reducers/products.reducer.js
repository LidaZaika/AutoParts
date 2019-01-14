import {GET_PRODUCTS} from "../actionsConstants"
import {FILTER_PRODUCTS} from "../actionsConstants"
import {SORT_PRODUCTS} from "../actionsConstants"


const productsReducer = (state=[2,3,4], action) =>{
   switch (action.type) {
       case GET_PRODUCTS:
            return [...action.payload];
        case FILTER_PRODUCTS:
            return [...action.payload];
        case SORT_PRODUCTS:
            return [...action.payload];
    default:
        return state;
   }
    
};

export default productsReducer