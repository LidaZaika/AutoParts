import {GET_PRODUCTS} from "../actionsConstants"
import {FILTER_PRODUCTS} from "../actionsConstants"
// import items from "../reducers/listCatalogPrice"

export const getProducts = (dispatch) =>{
    fetch('/api/products')
            .then(data => data.json())
            .then(data=>{
                const arr = data.map(el=> ({
                            id: el.id,
                            name: el.name,
                            brand: el.brand,
                            liter: el.liter,
                            price: el.price,
                            image: el.image,
                }))
            
        dispatch({
            type: GET_PRODUCTS,
            payload: arr,
        });
});
};
export const filterProducts = (dispatch)=>{
    fetch('/api/products')
            .then(data => data.json())
            .then(data=>{
    const oil = data.filter(el=>(el.brand==="Castrol"));

        dispatch({  
            type: FILTER_PRODUCTS,
            payload: oil
});
});
}
