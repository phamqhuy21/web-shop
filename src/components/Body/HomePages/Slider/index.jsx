import React from 'react';
import './index.css';

function index(props) {
    return (
        <div>
            <div id="slider">
                <input type="radio" name="r" id="r1" defaultChecked />
                <input type="radio" name="r" id="r2" />
                <input type="radio" name="r" id="r3" />
                <figure>
                    <div className="img-slider" id="img-slider1"></div>
                    <div className="img-slider" id="img-slider2"></div>
                    <div className="img-slider" id="img-slider3"></div>
                </figure>
                <div className="navigation">
                    <label htmlFor="r1" className="bar" />
                    <label htmlFor="r2" className="bar" />
                    <label htmlFor="r3" className="bar" />
                </div>
            </div>
        </div>
    );
}

export default index;
