import React, {useState, useEffect, useMemo} from "react";
import data1 from './../data/calendar/data1.json'
import "./Calendar.scss";

function Calendar() {
  // 最小&最大月份
  const [monthRange, setMonthRange] = useState({
    smallest: {
      year: 0,
      month: 0
    }, 
    largest: {
      year: 0,
      month: 0
    }
  })

  // 找到資料中的最大月份，用useMemo存起來
  const getMonthRange = (arr) => {
    // 把日期抓出來，轉成Date物件
    const dates = [];
    arr.map((item, i) => dates.push(new Date(item.date)))

    // 日期排序
    dates.sort((a, b) => a-b)
    setMonthRange({...monthRange, 
      smallest: {
        year: dates[0].getFullYear(),
        month: dates[0].getMonth()
      },
      largest: {
        year: dates[dates.length - 1].getFullYear(),
        month: dates[dates.length - 1].getMonth(),
      }
    })
    console.log(dates)
    return dates
  }

  useEffect(() => {
    getMonthRange(data1)
  }, [] )

  // const monthRange2 = useMemo(() => getMonthRange(data1), [])

  // 星期依序排列
  const daysOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  // 
  const thisYear = 2017;
  const thisMonth = 11;
  const days = new Date(thisYear, thisMonth, 0).getDate();
  const firstDay = new Date(thisYear, thisMonth, 1);
  const lastDay = new Date(thisYear, thisMonth + 1, 0);

  return (
    <div className="calendar_container">
      <div className="top_container">
        <div className="arrow prev_month">
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div className="monthly_tab">
          <div className="tab_container">
            <div className="date">
              <p className="year">{thisMonth === 1? thisYear - 1 : thisYear}&nbsp;</p>
              <p className="month">{thisMonth === 1? 12: thisMonth - 1}月</p>
            </div>
            <p className="depart_info"></p>
          </div>
          <div className="tab_container current_tab">
            <div className="date">
              <p className="year">{thisYear}&nbsp;</p>
              <p className="month">{thisMonth}月</p>
            </div>
          </div>
          <div className="tab_container">
            <div className="date">
              <p className="year">{thisMonth === 12? thisYear + 1 : thisYear}&nbsp;</p>
              <p className="month">{thisMonth === 12? 1: thisMonth + 1}月</p>
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
          { // 判斷前面需要幾個灰色框框aka本月從星期幾開始
            Array(1).fill(1).map((day, i) => {
            return <div className="day no_date" key={i}></div>
          })}
          { // 把本月天數白色格子跑出來
            Array(1).fill(1).map((d, i) => {
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
          { // 判斷後面需要幾個灰色框框aka下月在星期幾開始
            Array(1).fill(1).map((day, i) => {
            return <div className="day no_date" key={i}></div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
 