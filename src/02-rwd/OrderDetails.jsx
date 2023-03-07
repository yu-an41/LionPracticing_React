import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'; 
import "./OrderDetails.scss";

const useMobile = () => {
  const [device, setDevice] = useState("mobile");
  return device;
};
function OrderDetails() {
  return (
    <div>
      <ul className="OD_title_section" style={{ display: "none" }}>
        {/* 手機版時隱藏這塊 */}
        <li className="OD_title_lists">訂單編號</li>
        <li className="OD_title_lists">下單日期</li>
        <li className="OD_title_lists">單別/來源</li>
        <li className="OD_title_lists">同業業務</li>
        <li className="OD_title_lists">出發日期</li>
        <li className="OD_title_lists">產品名稱</li>
        <li className="OD_title_lists">人數</li>
        <li className="OD_title_lists">狀況</li>
        <li className="OD_title_lists">證照進度</li>
        <li className="OD_title_lists">雄獅業務</li>
        <li className="OD_title_lists">行前資料</li>
        <li className="OD_title_lists">總金額</li>
        <li className="OD_title_lists">尚欠款</li>
      </ul>
      <div className="OD_bottom_section">
        <div className="OD_block">
          <ul>
            {/* 一列一項 */}
            <li className="OD_block_item">
              <p className="OD_block_title">訂單編號</p>
              <p className="OD_block_content">
                <Link className="OD_block_link">8-2817070</Link>
              </p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">下單日期</p>
              <p className="OD_block_content">
              </p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">單別/來源</p>
              <p className="OD_block_content">
              <span></span>
              </p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">同業業務</p>
              <p className="OD_block_content">
              </p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">出發日期</p>
              <p className="OD_block_content">
              </p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">產品名稱</p>
              <ul className="OD_block_content">
                <li></li>
              </ul>
            </li>
            <li className="OD_block_title"></li>
            {/* 這邊開始一列兩項 */}
            <li className="OD_block_title_flex">
              <li className="OD_block_title">人數</li>
              <li className="OD_block_title">狀況</li>
            </li>
            <li className="OD_block_title_flex">
              <li className="OD_block_title">證照進度</li>
              <li className="OD_block_title">雄獅業務</li>
            </li>
            {/* 恢復一列一項 */}
            <li className="OD_block_title">行前資料</li>
            {/* 這邊開始一列兩項 */}
            <li className="OD_block_title_flex">
              <li className="OD_block_title">總金額</li>
              <li className="OD_block_title OD_block_title_half">尚欠款</li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
