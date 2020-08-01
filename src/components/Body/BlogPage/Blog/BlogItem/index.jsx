import React from 'react';
import './index.css';

function index(props) {
    const { title } = props;
    return (
        <div className="blog-item">
            <div
                className="blog-item-img"
                style={{ backgroundImage: `url('/adam7.PNG')` }}
            />
            <div className="blog-item-content">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default index;
