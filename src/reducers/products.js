import * as productsConstants from '../const/products';

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productsConstants.FETCH_PRODUCTS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                products: data,
            };
        }
        default:
            return state;
    }
};

export default reducer;
