import React from "react";
import "./index.css";

function index(props) {
  return (
    <div className="customer-star">
      <div className="title-customer">
        <h1>KHÁCH HÀNG VÀ SAO VIỆT</h1>
      </div>
      <div className="customer-cover">
        <div className="slide-customer">
          <ul>
            <li className="customer1" />
            <li className="customer2" />
            <li className="customer3" />
            <li className="customer4" />
            <li className="customer5" />
            <li className="customer6" />
            <li className="customer7" />
          </ul>
        </div>
        <div className="show-customer">
          <button>XEM THÊM</button>
        </div>
      </div>
    </div>
  );
}

export default index;
