import * as productsConstants from '../const/products';

export const fetchProducts = () => {
    return {
        type: productsConstants.FETCH_PRODUCTS,
    };
};

export const fetchProductsSuccess = (data) => {
    return {
        type: productsConstants.FETCH_PRODUCTS_SUCCESS,
        payload: { data },
    };
};
