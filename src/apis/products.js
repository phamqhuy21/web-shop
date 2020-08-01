import axiosService from '../common/axiosService';
import { API_ENDPOINT } from '../const/index';

const url = 'products';

export const getProducts = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};
