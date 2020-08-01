import React from 'react';
import HomePage from './containers/HomePage/index';
import ProductsPage from './containers/ProductsPage/index';
import BlogPage from './containers/BlogsPage/index';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: '/collections/:params',
        exact: true,
        main: ({ match }) => <ProductsPage match={match} />,
    },
    {
        path: '/blogs/:params',
        exact: true,
        main: ({ match }) => <BlogPage match={match} />,
    },
];

export default routes;
