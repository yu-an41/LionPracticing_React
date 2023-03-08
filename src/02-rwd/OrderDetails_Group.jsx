import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderDetails_Group.scss";

function OrderDetails() {
  const data = [
    {
      orderNum: '8-2817070',
      orderLink: '/',
      orderDate: '2018/09/11',
      group:'B2BC團',
      source: '陳寶雪',
      agent: '許士仁',
      departDate: '2018/09/24',
      product: {
        productId: '18EE924BR',
        productName: '特選奧捷鹽礦國王湖10日',
        productLink: '/',
      },
      numberOfPpl: 2,
      status: 'HK',
      certificate: '查看',
      lionAgent: '鐘幼琦',
      preSchedule: {
        link: '/',
        session: '行前說明會',
      },
      total: 770800,
      balanceDue: 890000,
    },
    {
      orderNum: '8-2817070',
      orderLink: '/',
      orderDate: '2018/09/11',
      group:'B2BC團',
      source: '陳寶雪',
      agent: '許士仁',
      departDate: '2018/09/24',
      product: {
        productId: '18EE924BR',
        productName: '特選奧捷鹽礦國王湖10日',
        productLink: '/',
      },
      numberOfPpl: 2,
      status: 'HK',
      certificate: '查看',
      lionAgent: '鐘幼琦',
      preSchedule: {
        link: '/',
        session: '行前說明會',
      },
      total: 770800,
      balanceDue: 890000,
    }
  ];

  return (
    <div className="OD_container">
      <ul className="OD_title_section">
        {/* 手機版時隱藏這塊 */}
        <li className="OD_title_lists OD_title_100">訂單編號</li>
        <li className="OD_title_lists OD_title_100">下單日期</li>
        <li className="OD_title_lists OD_title_100">單別/來源</li>
        <li className="OD_title_lists OD_title_60">同業業務</li>
        <li className="OD_title_lists OD_title_115">出發日期</li>
        <li className="OD_title_lists OD_title_165">產品名稱</li>
        <li className="OD_title_lists OD_title_60">人數</li>
        <li className="OD_title_lists OD_title_80">狀態</li>
        <li className="OD_title_lists OD_title_60">證照進度</li>
        <li className="OD_title_lists OD_title_70">雄獅業務</li>
        <li className="OD_title_lists OD_title_100">行前資料</li>
        <li className="OD_title_lists OD_title_70">總金額</li>
        <li className="OD_title_lists OD_title_110">尚欠款</li>
      </ul>
      {data.map((v, i) => {
        return <div className="OD_bottom_section">
        <div className="OD_block">
          <ul>
            {/* 手機版一列一項 */}
            <li className="OD_block_item OD_title_100">
              <p className="OD_block_title">訂單編號</p>
              <p className="OD_block_content">
                <Link className="OD_block_link" to={v.orderLink}>
                  {v.orderNum}
                </Link>
              </p>
            </li>
            <li className="OD_block_item OD_title_100">
              <p className="OD_block_title">下單日期</p>
              <p className="OD_block_content">{v.orderDate}</p>
            </li>
            <li className="OD_block_item OD_title_100">
              <p className="OD_block_title">單別/來源</p>
              <p className="OD_block_content OD_content_flex">
                <p>{v.group}&nbsp;/&nbsp;</p>
                <span className="OD_block_lightbox">{v.source}</span>
              </p>
            </li>
            <li className="OD_block_item OD_title_60">
              <p className="OD_block_title">同業業務</p>
              <p className="OD_block_content">{v.agent}</p>
            </li>
            <li className="OD_block_item OD_title_115">
              <p className="OD_block_title">出發日期</p>
              <p className="OD_block_content">{v.departDate}</p>
            </li>
            <li className="OD_block_item OD_title_165">
              <p className="OD_block_title">產品名稱</p>
              <p className="OD_block_content">
                <Link className="OD_block_link" to={v.product.productLink}>
                  <p className="OD_align_left">
                  {v.product.productId}
                    <span className="OD_block_slash_product">
                      &nbsp;/&nbsp;
                    </span>
                  </p>
                  <p className="OD_align_left">{v.product.productName}</p>
                </Link>
              </p>
            </li>
            {/* 手機版這邊開始一列兩項 */}
            <li className="OD_block_flex">
              <li className="OD_block_item OD_width_half OD_title_60">
                <p className="OD_block_title">人數</p>
                <p className="OD_block_content">{v.numberOfPpl}</p>
              </li>
              <li className="OD_block_item OD_width_half OD_title_80">
                <p className="OD_block_title OD_align_left">狀態</p>
                <p className="OD_block_content">{v.status}</p>
              </li>
            </li>
            <li className="OD_block_flex">
              <li className="OD_block_item OD_width_half OD_title_60">
                <p className="OD_block_title">證照進度</p>
                <p className="OD_block_content">
                  <span className="OD_block_lightbox">查看</span>
                </p>
              </li>
              <li className="OD_block_item OD_width_half OD_title_70">
                <p className="OD_block_title OD_align_left">雄獅業務</p>
                <p className="OD_block_content">{v.lionAgent}</p>
              </li>
            </li>
            {/* 恢復一列一項 */}
            <li className="OD_block_item OD_title_100">
              <p className="OD_block_title">行前資料</p>
              <p className="OD_block_content OD_content_flex">
                <Link className="OD_block_link" to={v.preSchedule.link}>
                  <p>
                    說資
                    <span className="OD_block_slash_pre">/&nbsp;</span>
                  </p>
                </Link>
                <span className="OD_block_lightbox">行前說明會</span>
              </p>
            </li>
            {/* 這邊開始一列兩項 */}
            <li className="OD_block_flex">
              <li className="OD_block_item OD_width_half OD_title_70">
                <p className="OD_block_title">總金額</p>
                <p className="OD_block_content">
                  <span className="OD_block_content_price">${Intl.NumberFormat().format(v.total)}</span>
                </p>
              </li>
              <li className="OD_block_item OD_width_half OD_title_110 OD_margin_right">
                <p className="OD_block_title OD_align_left OD_align_center">
                  尚欠款
                </p>
                <p className="OD_block_content">
                  <div className="OD_block_content_price OD_block_content_button">
                  ${Intl.NumberFormat().format(v.balanceDue)}
                  </div>
                </p>
              </li>
            </li>
          </ul>
        </div>
      </div>
      })}
      
    </div>
  );
}

export default OrderDetails;
