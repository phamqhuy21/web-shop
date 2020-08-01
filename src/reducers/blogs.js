import * as blogsConstants from '../const/blogs';

const initialState = {
    blogs: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case blogsConstants.FETCH_BLOG_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                blogs: data,
            };
        }
        default:
            return state;
    }
};

export default reducer;
