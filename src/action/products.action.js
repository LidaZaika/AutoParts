import {GET_PRODUCTS} from "../actionsConstants"
import {FILTER_PRODUCTS} from "../actionsConstants"
import {SORT_PRODUCTS} from "../actionsConstants"
import items from "../reducers/listCatalogPrice"


export const filterProducts = (dispatch, value)=>{
   
    const oil = items.filter(el=>(el.brand==="Castrol"));

        dispatch({  
            type: FILTER_PRODUCTS,
            payload: oil
});
};
export const filterProducts2 = ()=>{
   
    const oil2 = items.filter(el=>(el.brand==="Ford"));

        return({  
            type: FILTER_PRODUCTS,
            payload: oil2
});
};
export const sortProducts = ()=>{
   
    const sort = items.sort((prev, next) => {
        if ( prev.name < next.name ) return -1;
        if ( prev.name < next.name ) return 1;
    });

        return({  
            type: SORT_PRODUCTS,
            payload: sort
});
};
export const sortProducts2 = ()=>{
   
    const sort2 = items.sort((prev, next) => {
        if ( prev.name < next.name ) return 1;
        if ( prev.name < next.name ) return -1;
    });

        return({  
            type: SORT_PRODUCTS,
            payload: sort2
});
};
export const getProducts = (dispatch) =>{

        dispatch({
            type: GET_PRODUCTS,
            payload: items
        });

};
