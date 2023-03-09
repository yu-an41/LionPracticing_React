import React from "react";
import "./Calendar.scss";

function Calendar() {
  const week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  return (
    <div className="calendar_container">
      <div className="top_container">
        <div className="arrow prev_month">
          <i class="fa-solid fa-caret-left"></i>
        </div>
        <div className="monthly_tab">
          <div className="tab_container">
            <div className="date">
              <p className="year">2017&nbsp;</p>
              <p className="month">5月</p>
            </div>
            <p className="depart_info"></p>
          </div>
          <div className="tab_container current_tab">
            <div className="date">
              <p className="year">2017&nbsp;</p>
              <p className="month">6月</p>
            </div>
          </div>
          <div className="tab_container">
            <div className="date">
              <p className="year">2017&nbsp;</p>
              <p className="month">7月</p>
            </div>
            <p className="depart_info">無出發日</p>
          </div>
        </div>
        <div className="arrow next_month">
          <i class="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="bottom_container">
        <div className="days_of_week">
          {week.map((day, i) => {
            return <p className="week_day">{day}</p>;
          })}
        </div>
        <div className="days_calender">
          <div className="day"></div>
          <div className="no_date"></div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
