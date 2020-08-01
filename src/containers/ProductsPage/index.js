import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from '../../components/Body/ProductsPage/Products/index';
import LinkProduct from '../../components/Body/LinkTitle/index';
import Product from '../../components/Body/ProductsPage/Product/index';
import { fetchProducts } from '../../actions/products';

function ProductsPage(props) {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [param, setParam] = useState({
        title: '',
        id: null,
    });
    const { params } = props.match.params;

    useEffect(() => {
        dispatch(fetchProducts());
        switch (params) {
            case 'all-products':
                setParam({
                    title: 'toàn bộ sản phẩm',
                    id: 0,
                });
                break;
            case 'vest-cong-so':
                setParam({
                    title: 'vest công sở',
                    id: 1,
                });
                break;
            case 'vest-cuoi':
                setParam({
                    title: 'vest cưới',
                    id: 2,
                });
                break;
            case 'so-mi-nam':
                setParam({
                    title: 'sơ mi nam',
                    id: 3,
                });
                break;
            case 'ao-phong-nam':
                setParam({
                    title: 'áo phông nam',
                    id: 4,
                });
                break;
            case 'giay-da-nam':
                setParam({
                    title: 'giày da nam',
                    id: 5,
                });
                break;
            case 'quan-au-nam':
                setParam({
                    title: 'quần âu nam',
                    id: 6,
                });
                break;
            default:
                setParam({
                    title: '',
                    id: null,
                });
                break;
        }
    }, [...params]);

    const showProduct = (products) => {
        let result = null;
        if (param) {
            if (products) {
                if (param.id === 0) {
                    result = products.map((product, index) => {
                        if (product.product) {
                            return product.product.map((item, index) => {
                                if (item.product) {
                                    return (
                                        <Product
                                            key={index}
                                            product={item.product}
                                        />
                                    );
                                } else return;
                            });
                        } else {
                            return;
                        }
                    });
                } else if (param.id) {
                    result = products
                        .filter((product) => {
                            return product.id === param.id;
                        })
                        .map((product, index) => {
                            if (product.product) {
                                return product.product.map((item, index) => {
                                    return (
                                        <Product
                                            key={index}
                                            product={item.product}
                                        />
                                    );
                                });
                            }
                        });
                } else {
                    return (
                        <React.Fragment>
                            <h1>NOT FOUND</h1>
                        </React.Fragment>
                    );
                }
            }
        }
        return result;
    };

    return (
        <React.Fragment>
            <LinkProduct title={param.title} />
            <Products title={param.title}>{showProduct(products)}</Products>
        </React.Fragment>
    );
}

export default ProductsPage;
