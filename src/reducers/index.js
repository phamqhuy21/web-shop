import { combineReducers } from 'redux';
import productsReducer from './products';
import blogsReducer from './blogs';

const rootReducer = combineReducers({
    products: productsReducer,
    blogs: blogsReducer,
});

export default rootReducer;
