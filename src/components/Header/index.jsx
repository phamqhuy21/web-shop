import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function index(props) {
    return (
        <div className="header">
            <div>
                <div className="header-top">
                    <a href="#">Hệ thống cửa hàng</a>
                    <a href="#">Liên hệ</a>
                    <a href="#">
                        Tìm kiếm <i className="fa fa-search" />
                    </a>
                    <a href="#">
                        <i className="fa fa-user" />
                    </a>
                    <a href="#">
                        <i className="fa fa-shopping-bag" />
                    </a>
                </div>
                <nav>
                    <ul>
                        <li className="menu">
                            <a href="#">
                                HỆ THỐNG <b>71</b> CỬA HÀNG
                            </a>
                        </li>
                        <li />
                        <li className="menu active">
                            <a href="#">
                                GIỚI THIỆU <i className="fa fa-angle-down" />
                            </a>
                            <ul className="ani-menu">
                                <li>
                                    <a href="#">GIỚI THIỆU</a>
                                </li>
                                <li>
                                    <a href="#">ADAM &amp; KHÁCH HÀNG</a>
                                </li>
                                <li>
                                    <a href="#">ƯU ĐÃI ĐỐI TÁC ADAM</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu">
                            <Link to="/collections/all-products">
                                SẢN PHẨM <i className="fa fa-angle-down" />
                            </Link>
                            <ul className="ani-menu">
                                <li>
                                    <Link to="/collections/vest-cong-so">
                                        VEST CÔNG SỞ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/collections/vest-cuoi">
                                        VEST CƯỚI
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/collections/so-mi-nam">
                                        SƠ MI NAM
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/collections/ao-phong-nam">
                                        ÁO PHÔNG NAM
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/collections/giay-da-nam">
                                        GIÀY DA NAM
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/collections/quan-au-nam">
                                        QUẦN ÂU NAM
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#">LOOKBOOK</a>
                        </li>
                        <li className="menu">
                            <a href="#">GÓC ADAM</a>
                        </li>
                        <li className="menu">
                            <Link to="/blogs/adamstore">
                                ADAMSTORE 360 <i className="fa fa-angle-down" />
                            </Link>
                            <ul className="ani-menu">
                                <li>
                                    <Link to="/blogs/news">NEWS</Link>
                                </li>
                                <li>
                                    <Link to="/blogs/khuyen-mai">
                                        KHUYẾN MÃI
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs/adam-va-bao-chi">
                                        ADAM VÀ BÁO CHÍ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs/uu-dai-doi-tac-adam">
                                        ƯU ĐÃI ĐỐI TÁC ADAM
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs/sao-viet-va-khach-hang">
                                        SAO VIỆT VÀ KHÁCH HÀNG
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default index;
