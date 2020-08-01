import React from 'react';
import Slider from '../../components/Body/HomePages/Slider/index';
import ImgGrid from '../../components/Body/HomePages/ImgGrid/index';
import Video from '../../components/Body/HomePages/Video/index';
import Collection from '../../components/Body/HomePages/Collection/index';
import Customer from '../../components/Body/HomePages/Customer/index';

function index(props) {
    return (
        <div className="body">
            <Slider />
            <ImgGrid />
            <Video />
            <Collection />
            <Customer />
        </div>
    );
}

export default index;
