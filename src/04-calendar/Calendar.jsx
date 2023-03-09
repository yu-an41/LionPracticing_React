import React from "react";
import "./Calendar.scss";

function Calendar() {
  const daysOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const thisYear = 2023;
  const thisMonth = 3;
  const days = new Date(thisYear, thisMonth, 0).getDate();
  console.log(days);

  return (
    <div className="calendar_container">
      <div className="top_container">
        <div className="arrow prev_month">
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div className="monthly_tab">
          <div className="tab_container">
            <div className="date">
              <p className="year">2023&nbsp;</p>
              <p className="month">2月</p>
            </div>
            <p className="depart_info"></p>
          </div>
          <div className="tab_container current_tab">
            <div className="date">
              <p className="year">2023&nbsp;</p>
              <p className="month">3月</p>
            </div>
          </div>
          <div className="tab_container">
            <div className="date">
              <p className="year">2023&nbsp;</p>
              <p className="month">4月</p>
            </div>
            <p className="depart_info">無出發日</p>
          </div>
        </div>
        <div className="arrow next_month">
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="bottom_container">
        <div className="weeks_wrap">
          {daysOfWeek.map((day, i) => {
            return <p className="week_day" key={i}>{day}</p>;
          })}
        </div>
        <div className="days_calender">

          <div className="day no_date"></div>
          <div className="day no_date"></div>
          <div className="day no_date"></div>
          {/* <div className="day"></div> */}
          {
            // 判斷前面需要幾個灰色框框aka本月從星期幾開始

          }
          {
            // 把本月天數白色格子跑出來
            Array(days).fill(1).map((d, i) => {
            return (
              <div className="day date" key={i+1}>
                <div className="day_tag">成團</div>
                <div className="day_top">
                  <p className="date_number">{i+1}</p>
                  <div className="dot"></div>
                </div>
                <ul className="day_bottom">
                  <li className="day_details status closed">預定</li>
                  <li className="day_details available_vancancy">可賣：0</li>
                  <li className="day_details total_vacnacy">團位：20</li>
                  <li className="day_details price">${Intl.NumberFormat().format(76263)}</li>
                  {/* 如果看更多就是只顯示這兩項 
                  <li className="details_flex">
                    <p className="day_details link">看更多團</p>
                    <i className="day_details link fa-solid fa-caret-right"></i>
                  </li>
                  <li className="day_details price">${Intl.NumberFormat().format(76263)}<span>起</span></li>
                  */}
                </ul>
              </div>
            )
          })}
          {
            // 判斷後面需要幾個灰色框框aka本月從星期幾開始
          }
          <div className="day no_date"></div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
