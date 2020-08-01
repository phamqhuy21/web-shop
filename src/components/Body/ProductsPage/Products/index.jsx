import React from 'react';
import './index.css';

function index(props) {
    const { title } = props;
    return (
        <div className="product-container">
            <div>
                <div className="product-title">
                    <h1>
                        {typeof title === 'string' ? title.toUpperCase() : null}
                    </h1>
                </div>
                <div className="product-grid">{props.children}</div>
            </div>
        </div>
    );
}

export default index;
