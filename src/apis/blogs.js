import axiosService from '../common/axiosService';
import { API_ENDPOINT } from '../const/index';

const url = 'blogs';

export const getBlogs = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};
