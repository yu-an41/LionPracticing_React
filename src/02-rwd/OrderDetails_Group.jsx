import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderDetails_Group.scss";

function OrderDetails() {
  const data = [
    {
      orderNum: "8-2817070",
      orderLink: "/",
      orderDate: "2018/09/11",
      group: "B2BC團",
      source: "陳寶雪",
      agent: "許士仁",
      departDate: "2018/09/24",
      product: {
        productId: "18EE924BR",
        productName: "特選奧捷鹽礦國王湖10日",
        productLink: "/",
      },
      numberOfPpl: 2,
      status: "HK",
      statusDate: "",
      certificate: "查看",
      lionAgent: "鐘幼琦",
      preSchedule: {
        link: "/",
        session: "行前說明會",
      },
      total: 770800,
      balanceDue: 890000,
    },
    {
      orderNum: "8-2817070",
      orderLink: "/",
      orderDate: "2018/09/11",
      group: "B2BC團",
      source: "陳寶雪",
      agent: "許士仁",
      departDate: "2018/09/24",
      product: {
        productId: "18EE924BR",
        productName: "特選奧捷鹽礦國王湖10日",
        productLink: "/",
      },
      numberOfPpl: 2,
      status: "HK",
      statusDate: "",
      certificate: "查看",
      lionAgent: "鐘幼琦",
      preSchedule: {
        link: "/",
        session: "行前說明會",
      },
      total: 770800,
      balanceDue: 890000,
    },
    {
      orderNum: "8-2817070",
      orderLink: "/",
      orderDate: "2018/09/11",
      group: "B2BC團",
      source: "陳寶雪",
      agent: "許士仁",
      departDate: "2018/09/24",
      product: {
        productId: "18EE924BR",
        productName: "特選奧捷鹽礦國王湖10日",
        productLink: "/",
      },
      numberOfPpl: 2,
      status: "HK",
      statusDate: "",
      certificate: "查看",
      lionAgent: "鐘幼琦",
      preSchedule: {
        link: "/",
        session: "行前說明會",
      },
      total: 770800,
      balanceDue: 890000,
    },
    {
      orderNum: "8-2817070",
      orderLink: "/",
      orderDate: "2018/09/11",
      group: "B2BC團",
      source: "陳寶雪",
      agent: "許士仁",
      departDate: "2018/09/24",
      product: {
        productId: "18ESD27TK",
        productName: "旅展特選葡萄牙雙點TK10日",
        productLink: "/",
      },
      numberOfPpl: 2,
      status: "作廢",
      statusDate: "",
      certificate: "查看",
      lionAgent: "鐘幼琦",
      preSchedule: {
        link: "/",
        session: "行前說明會",
      },
      total: 770800,
      balanceDue: 890000,
    },
    {
      orderNum: "8-2817070",
      orderLink: "/",
      orderDate: "2018/09/11",
      group: "B2BC團",
      source: "陳寶雪",
      agent: "許士仁",
      departDate: "2018/09/24",
      product: {
        productId: "18EE924BR",
        productName: "特選奧捷鹽礦國王湖10日",
        productLink: "/",
      },
      numberOfPpl: 2,
      status: "HK",
      statusDate: "2020/11/03 12:28",
      certificate: "查看",
      lionAgent: "鐘幼琦",
      preSchedule: {
        link: "/",
        session: "行前說明會",
      },
      total: 7800,
      balanceDue: 0,
    },
    {
      orderNum: "8-2817070",
      orderLink: "/",
      orderDate: "2018/09/11",
      group: "B2BC團",
      source: "陳寶雪",
      agent: "許士仁",
      departDate: "2018/09/24",
      product: {
        productId: "18JKD28BXH",
        productName: "連休特選饗宴釜邱天空纜車5日",
        productLink: "/",
      },
      numberOfPpl: 2,
      status: "HK",
      statusDate: "",
      certificate: "查看",
      lionAgent: "鐘幼琦",
      preSchedule: {
        link: "/",
        session: "行前說明會",
      },
      total: 7800,
      balanceDue: 900,
    },
  ];

  return (
    <div className="container">
      <ul className="title_section">
        {/* 手機版時隱藏這塊 */}
        <li className="title_lists title_100">訂單編號</li>
        <li className="title_lists title_100">下單日期</li>
        <li className="title_lists title_100">單別/來源</li>
        <li className="title_lists title_60">同業業務</li>
        <li className="title_lists title_115">出發日期</li>
        <li className="title_lists title_165">產品名稱</li>
        <li className="title_lists title_60">人數</li>
        <li className="title_lists title_80">狀態</li>
        <li className="title_lists title_60">證照進度</li>
        <li className="title_lists title_70">雄獅業務</li>
        <li className="title_lists title_100">行前資料</li>
        <li className="title_lists title_70">總金額</li>
        <li className="title_lists title_110">尚欠款</li>
      </ul>
      <div className="bottom_section">
        {data.map((v, i) => {
          return (
            <div className={`block ${v.status === "作廢" ? "disabled" : ""}`}>
              <ul>
                {/* 手機版一列一項 */}
                <li className="block_item title_100">
                  <p className="block_title">訂單編號</p>
                  <p className="block_content">
                    <Link className="block_link" to={v.orderLink}>
                      {v.orderNum}
                    </Link>
                  </p>
                </li>
                <li className="block_item title_100">
                  <p className="block_title">下單日期</p>
                  <p className="block_content">{v.orderDate}</p>
                </li>
                <li className="block_item title_100">
                  <p className="block_title">單別/來源</p>
                  <p className="block_content content_flex">
                    <p className="block_source">
                      {v.group}
                      <span className="block_slash_source">&nbsp;/&nbsp;</span>
                    </p>
                    <span className="block_lightbox block_source_name">
                      {v.source}
                    </span>
                  </p>
                </li>
                <li className="block_item title_60">
                  <p className="block_title">同業業務</p>
                  <p className="block_content">{v.agent}</p>
                </li>
                <li className="block_item title_115">
                  <p className="block_title">出發日期</p>
                  <p className="block_content">{v.departDate}</p>
                </li>
                <li className="block_item title_165">
                  <p className="block_title">產品名稱</p>
                  <p className="block_content text_left">
                    <Link className="block_link" to={v.product.productLink}>
                      <span className="text_left">
                        {v.product.productId}
                        <span className="block_slash_product">
                          &nbsp;/&nbsp;
                        </span>
                      </span>
                      <span className="text_left">{v.product.productName}</span>
                    </Link>
                  </p>
                </li>
                {/* 手機版這邊開始一列兩項 */}
                <li className="block_flex">
                  <li className="block_item width_half title_60">
                    <p className="block_title">人數</p>
                    <p className="block_content">{v.numberOfPpl}</p>
                  </li>
                  <li className="block_item width_half title_80">
                    <p className="block_title text_left">狀態</p>
                    <span
                      className={`block_content ${
                        v.status === "作廢" ? "" : " status_lightbox"
                      }`}
                    >
                      {v.status}
                    </span>
                    {/* {v.statusDate && <p className="block_content">
                    {v.statusDate}
                    </p>} */}
                  </li>
                </li>
                <li className="block_flex">
                  <li className="block_item width_half title_60">
                    <p className="block_title">證照進度</p>
                    <p className="block_content">
                      {v.status === "作廢" ? (
                        <span>-</span>
                      ) : (
                        <span className="block_lightbox">查看</span>
                      )}
                    </p>
                  </li>
                  <li className="block_item width_half title_70">
                    <p className="block_title text_left">雄獅業務</p>
                    <p className="block_content">{v.lionAgent}</p>
                  </li>
                </li>
                {/* 恢復一列一項 */}
                <li className="block_item title_100">
                  <p className="block_title">行前資料</p>
                  <p className="block_content content_flex">
                    {v.status === "作廢" ? (
                      ""
                    ) : (
                      <Link className="block_link" to={v.preSchedule.link}>
                        <span className="block_link_pre">
                          說資
                        </span>
                        <span className="block_slash_pre">
                        /&nbsp;
                        </span>
                      </Link>
                    )}
                    <span className="block_lightbox enable">行前說明會</span>
                  </p>
                </li>
                {/* 這邊開始一列兩項 */}
                <li className="block_flex">
                  <li className="block_item width_half title_70">
                    <p className="block_title">總金額</p>
                    <p className="block_content">
                      <span className="block_content_price">
                        ${Intl.NumberFormat().format(v.total)}
                      </span>
                    </p>
                  </li>
                  <li className="block_item width_half title_110 margin_right">
                    <p className="block_title text_left align_center">尚欠款</p>
                    <p className="block_content dp_block">
                      <div
                        className={` block_content_button ${
                          v.balanceDue === 0
                            ? "block_balance_zero"
                            : "block_content_price"
                        }`}
                      >
                        ${Intl.NumberFormat().format(v.balanceDue)}
                      </div>
                    </p>
                  </li>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderDetails;
