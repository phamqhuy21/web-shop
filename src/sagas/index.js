import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    select,
    takeEvery,
} from 'redux-saga/effects';
import { fetchProductsSuccess } from '../actions/products';
import { fetchBlogsSuccess } from '../actions/blogs';
import * as typeProducts from '../const/products';
import * as typeBlogs from '../const/blogs';
import { getProducts } from '../apis/products';
import { getBlogs } from '../apis/blogs';
import { STATUS_CODE } from '../const/index';

function* fetchProductsSaga() {
    yield delay(500);
    const resp = yield call(getProducts);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetchProductsSuccess(data));
    }
}

function* fetchBlogsSaga() {
    yield delay(500);
    const resp = yield call(getBlogs);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetchBlogsSuccess(data));
    }
}

function* rootSaga() {
    yield takeEvery(typeProducts.FETCH_PRODUCTS, fetchProductsSaga);
    yield takeEvery(typeBlogs.FETCH_BLOG, fetchBlogsSaga);
}

export default rootSaga;
