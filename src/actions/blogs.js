import * as blogsConstant from '../const/blogs';

export const fetchBlogs = () => {
    return {
        type: blogsConstant.FETCH_BLOG,
    };
};

export const fetchBlogsSuccess = (data) => {
    return {
        type: blogsConstant.FETCH_BLOG_SUCCESS,
        payload: {
            data,
        },
    };
};
