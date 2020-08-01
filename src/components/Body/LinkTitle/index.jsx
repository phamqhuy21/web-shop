import React from 'react';
import './index.css';

function index(props) {
    const { title } = props;
    return (
        <div id="link-title">
            <div className="link-product">
                <a href="#">
                    <i className="fa fa-home" /> Trang chủ
                </a>
                <span> / </span>
                <span>
                    {typeof title === 'string'
                        ? title.charAt(0).toUpperCase() + title.slice(1)
                        : null}
                </span>
            </div>
            <div className="title">
                <h2>
                    {typeof title === 'string' ? title.toUpperCase() : null}
                </h2>
            </div>
        </div>
    );
}

export default index;
