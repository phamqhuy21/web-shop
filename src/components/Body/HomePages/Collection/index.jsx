import React from 'react';
import './index.css';

function index(props) {
    return (
        <div className="collection">
            <div className="title-collection">
                <h2>BỘ SƯU TẬP</h2>
            </div>
            <div className="btn-collection">
                <button>BST VEST CÔNG SỞ ADAM STORE</button>
                <button>BST VEST CƯỚP 2020</button>
                <button>SƠ MI NAM ADAM STORE</button>
                <button>GIÀY DA ADAM STORE</button>
                <button>ÁO PHÔNG ADAMSTORE</button>
                <button>QUẦN ÂU ADAM STORE</button>
                <button>QUẦN LÓT NAM</button>
                <button>CARAVAT</button>
                <button>KHĂN CÀI VEST</button>
            </div>
            <div className="products-cover">
                <div className="slide-products">
                    <ul>
                        <li className="product1" />
                        <li className="product2" />
                        <li className="product3" />
                        <li className="product4" />
                        <li className="product5" />
                        <li className="product6" />
                        <li className="product7" />
                    </ul>
                </div>
                <div className="show-products">
                    <button>XEM TẤT CẢ SẢN PHẨM</button>
                </div>
            </div>
        </div>
    );
}

export default index;
