import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderDetails.scss";

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
              <p className="OD_block_content">2018/09/11</p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">單別/來源</p>
              <p className="OD_block_content">
                B2BC團&nbsp;/&nbsp;
                <span className="OD_block_lightbox">陳寶雪</span>
              </p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">同業業務</p>
              <p className="OD_block_content">許士仁</p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">出發日期</p>
              <p className="OD_block_content">2018/09/24</p>
            </li>
            <li className="OD_block_item">
              <p className="OD_block_title">產品名稱</p>
              <p className="OD_block_content">
                <Link className="OD_block_link">
                  18EE924BR
                  <span className="OD_block_slash_product">&nbsp;/&nbsp;</span>
                  <br />
                  特選奧捷鹽礦國王湖10日
                </Link>
              </p>
            </li>
            {/* 這邊開始一列兩項 */}
            <li className="OD_block_flex">
              <li className="OD_block_item width_half">
                <p className="OD_block_title">人數</p>
                <p className="OD_block_content">2</p>
              </li>
              <li className="OD_block_item width_half">
                <p className="OD_block_title OD_align_left">狀態</p>
                <p className="OD_block_content">HK</p>
              </li>
            </li>
            <li className="OD_block_flex">
              <li className="OD_block_item width_half">
                  <p className="OD_block_title">證照進度</p>
                  <p className="OD_block_content">
                    <span className="OD_block_lightbox">查看</span>
                  </p>
              </li>
              <li className="OD_block_item width_half">
                  <p className="OD_block_title OD_align_left">雄獅業務</p>
                  <p className="OD_block_content">鐘幼琦</p>
              </li>
            </li>
            {/* 恢復一列一項 */}
            <li className="OD_block_item">
              <p className="OD_block_title">行前資料</p>
              <p className="OD_block_content">
                <Link className="OD_block_link">說資</Link>
                <span className="OD_block_slash_pre">/&nbsp;</span>
                <span className="OD_block_lightbox">行前說明會</span>
              </p>
            </li>
            {/* 這邊開始一列兩項 */}
            <li className="OD_block_flex">
              <li className="OD_block_item width_half">
                  <p className="OD_block_title">總金額</p>
                  <p className="OD_block_content">
                    <span className="OD_block_content_price">$77,800</span>
                  </p>
              </li>
              <li className="OD_block_item width_half">
                  <p className="OD_block_title OD_align_left">尚欠款</p>
                  <p className="OD_block_content">
                    <div className="OD_block_content_price OD_block_content_button">$890,000</div>
                  </p>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
