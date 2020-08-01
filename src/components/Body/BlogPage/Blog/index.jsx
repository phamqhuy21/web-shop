import React, { Children } from 'react';
import './index.css';

function index(props) {
    return (
        <div className="blog-content">
            <div className="blog-title">
                <h2>ƯU ĐÃI ĐỐI TÁC ADAM</h2>
            </div>
            <div className="blog-body">{props.children}</div>
        </div>
    );
}

export default index;
