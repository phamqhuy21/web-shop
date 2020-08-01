import React from 'react';
import './index.css';

function index(props) {
    const { product } = props;
    return (
        <div className="product-cover">
            <div
                className="product-img"
                style={{ backgroundImage: `url('${product.img}')` }}
            />
            <div className="product-content">
                <a href="#">{product.name}</a>
                <p>{product.price}đ</p>
            </div>
        </div>
    );
}

export default index;
