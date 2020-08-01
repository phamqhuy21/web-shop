import React from 'react';
import './index.css';

function index(props) {
    return (
        <div className="side-bar">
            <div className="modal">
                <div className="modal-title">
                    <h3>ADAMSTORE 360</h3>
                </div>
                <div className="modal-body">{props.children}</div>
            </div>
        </div>
    );
}

export default index;
