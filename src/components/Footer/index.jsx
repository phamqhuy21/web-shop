import React from 'react';
import adam from '../../img/adam.PNG';
import './index.css';

function index(props) {
    return (
        <div className="footer">
            <div className="contact-footer">
                <div>
                    <img src={adam} alt />
                </div>
                <div className="hotline">
                    <i className="fa fa-phone" />
                    <a href="#"> 0938 888 835</a>
                </div>
                <div className="email">
                    <i className="fa fa-envelope" />
                    <a href="#"> info@adamgroup.vn</a>
                </div>
            </div>
            <div className="service-footer">
                <div className="title-service">
                    <p>DỊCH VỤ KHÁCH HÀNG</p>
                </div>
                <div className="content-service">
                    <div>
                        <a href="#">News</a>
                    </div>
                    <div>
                        <a href="#">Khuyến mãi</a>
                    </div>
                    <div>
                        <a href="#">Adam và báo chí</a>
                    </div>
                    <div>
                        <a href="#">Ưu đãi đối tác Adam</a>
                    </div>
                    <div>
                        <a href="#">Sao Việt và khách hàng</a>
                    </div>
                    <div>
                        <a href="#">Adam's video</a>
                    </div>
                </div>
            </div>
            <div className="products-footer">
                <div className="title-products">
                    <p>NHÓM SẢN PHẨM</p>
                </div>
                <div className="content-products">
                    <div>
                        <a href="#">VEST CÔNG SỞ</a>
                    </div>
                    <div>
                        <a href="#">VEST CƯỚI</a>
                    </div>
                    <div>
                        <a href="#">SƠ MI NAM</a>
                    </div>
                    <div>
                        <a href="#">ÁO PHÔNG NAM</a>
                    </div>
                    <div>
                        <a href="#">GIÀY DA NAM</a>
                    </div>
                    <div>
                        <a href="#">QUẦN ÂU NAM</a>
                    </div>
                    <div>
                        <a href="#">QUẦN LÓT NAM</a>
                    </div>
                    <div>
                        <a href="#">THẮT LƯNG NAM</a>
                    </div>
                    <div>
                        <a href="#">PHỤ KIỆN VEST</a>
                    </div>
                </div>
            </div>
            <div className="social-footer" />
        </div>
    );
}

export default index;
