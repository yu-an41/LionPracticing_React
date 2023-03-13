import React, { useState, useEffect, useMemo } from "react";

// data
import data1 from "./../data/calendar/data1.json";
import data2 from "./../data/calendar/data2.json";
import data3 from "./../data/calendar/data3.json";
import data4 from "./../data/calendar/data4.json";

// stylesheet
import "./Calendar.scss";

function Calendar() {
  // 處理data（改keyName + 合併）
  const new_data2 = data2.map(({certain, date, price, onsell, total, state}) => ({
    guaranteed: certain,
    date,
    price,
    availableVancancy: onsell,
    totalVacnacy: total,
    status: state, 
  }))
  const datas = data1.concat(new_data2, data3, data4);

  // 找到資料中的最大月份，用useMemo存起來
  const getMonthRange = (arr) => {
    // 把日期抓出來，轉成Date物件
    const dates = [];
    arr.map((item, i) => dates.push(new Date(item.date)));

    // 日期排序
    // getMonth()回傳的序號+1換成月份
    dates.sort((a, b) => a - b);
    const months = {
      smallest: {
        year: dates[0].getFullYear(),
        month: dates[0].getMonth() + 1,
      },
      largest: {
        year: dates[dates.length - 1].getFullYear(),
        month: dates[dates.length - 1].getMonth() + 1,
      },
    };
    return months;
  };
  const monthRange = useMemo(() => getMonthRange(datas), []);

  // 星期依序排列
  const daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",];

  // 當前月份（預設值是一進來的瀏覽月份aka最大月份的前一個月）
  const [currentMonth, setCurrentMonth] = useState(
    monthRange.largest.month === 1
      ? [monthRange.largest.year - 1, 12]
      : [monthRange.largest.year, monthRange.largest.month - 1]
  );

  // 當前月份共幾天、第一天最後一天分別是星期幾
  const firstDay = new Date(currentMonth[0], currentMonth[1]-1, 1);
  const [currentDays, setCurrentDays] = useState({
    days: 0,
    firstDayOfWeek: 0,
  });
  const getCurrentDays = () => {
    setCurrentDays({
      days: new Date(currentMonth[0], currentMonth[1], 0).getDate(), 
      firstDayOfWeek: firstDay.getDay(),
    })
  }

  // 反白（當天月份）位置
  const [activeMonth, setActiveMonth] = useState(1);

  // 判斷當前月的前/後月是否為最小/最大月（用來disable左右箭頭->先不處理）
  const smallestMonth = JSON.stringify(currentMonth) === JSON.stringify(
    monthRange.smallest.month === 1
    ? [monthRange.smallest.year - 1, 12]
    : [monthRange.smallest.year, monthRange.smallest.month - 1]);

  const largestMonth = JSON.stringify(currentMonth) === JSON.stringify(
    currentMonth === (monthRange.largest.month === 1
    ? [monthRange.largest.year - 1, 12]
    : [monthRange.largest.year, monthRange.largest.month - 1]));

  // 左右箭頭功能（前後月）
  const getPrevMonth = () => {
    // tab在中間時，currentMonth-1，顯示月份不變位置
    if (currentMonth[1] === 1) {
      setCurrentMonth([currentMonth[0] - 1, 12])
    } else {
      setCurrentMonth([currentMonth[0], currentMonth[1] - 1])
    }

    // active不管在哪裡都往左移
    setActiveMonth(activeMonth === 0? 0 : activeMonth - 1);
  }

  const getNextMonth = () => {
      // tab在中間時，currentMonth+1，顯示月份不變位置
        if (currentMonth[1] === 12) {
          setCurrentMonth([currentMonth[0] + 1, 1])
        } else {
          setCurrentMonth([currentMonth[0], currentMonth[1] + 1])
        }

      // active不管在哪裡都往右移
      setActiveMonth(activeMonth ===2 ? 2: activeMonth + 1);
    }

  // 點月份tab連動currentMonth跟active
  const handleTabClick = (e)=> {
    console.log(e.currentTarget)
    // 方法一，用e.target抓到<p>裡面的value，setCurrentMonth


    // 方法二，判斷當前active跟點擊的月份差幾個tab，看增加/減少幾個月

  }

  // 抓當前月份的資料
  const [currentDetails, setCurrentDetails] = useState([{
      "guaranteed": false,
      "date": "0000/00/00",
      "price": 0,
      "availableVancancy": 0,
      "totalVacnacy": 0,
      "status": "預定"
  }])
  const getCurrentDetails = (detail) => {
    const details = datas.filter((v, i) => v.date.includes(`${currentMonth[0]}/${currentMonth[1]}/`));
    setCurrentDetails(details);
    console.log(details)
    return details;
  }

  useEffect(() => {
    getCurrentDays();
    getCurrentDetails();
  }, [currentMonth])

  return (
    <div className="calendar_container">
      <div className="top_container">
        <div className={`arrow prev_month ${currentMonth === [monthRange.smallest.year, monthRange.smallest.month]? 'disabled':''}`}
          onClick={()=> {
            if (currentMonth !== [monthRange.smallest.year, monthRange.smallest.month]) getPrevMonth();
          }}
          >
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div className="monthly_tab">
        {Array(3).fill(1).map((tab, i) => {
          return (
            <div key={i} className={`tab_container ${activeMonth === i? 'current_tab':''}`}
            onClick={(e) => {
              handleTabClick(e);
            }}
            >
            <div className="date">
                {activeMonth === 0? (
                  <>
                  {i === 0? (
                  <>
                  <p className="year">{currentMonth[0]}&nbsp;</p>
                  <p className="month">{currentMonth[1]}月</p>
                  </>
                  ): <></>}
                  {i === 1? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 12 ? currentMonth[0] + 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] >= 11 ? (currentMonth[1] === 11? 12: 1) : currentMonth[1] + 1}月
                  </p>
                  </>
                  ): <></>}
                  {i === 2? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 11 ? currentMonth[0] + 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 11 ? 1 : currentMonth[1] + 2}月
                  </p>
                  </>
                  ): <></>}
                  </>
                  ) : <></>
                }
                {activeMonth === 1? (
                  <>
                  {i === 0? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 1 ? currentMonth[0] - 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 1 ? 12 : currentMonth[1] - 1}月
                  </p>
                  </>
                  ): <></>}
                  {i === 1? (
                  <>
                  <p className="year">{currentMonth[0]}&nbsp;</p>
                  <p className="month">{currentMonth[1]}月</p>
                  </>
                  ): <></>}
                  {i === 2? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 12 ? currentMonth[0] + 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 12 ? 1 : currentMonth[1] + 1}月
                  </p>
                  </>
                  ): <></>}
                  </>
                  ) : <></>
                }
                {activeMonth === 2? (
                    <>
                    {i === 0? (
                    <>
                      <p className="year">
                        {currentMonth[1] <= 2 ? currentMonth[0] - 1 : currentMonth[0]}&nbsp;
                      </p>
                      <p className="month">
                        {currentMonth[1] <= 2 ? (currentMonth[1] === 2? 12: 11) : currentMonth[1] - 2}月
                      </p>
                    </>
                    ): <></>}
                    {i === 1? (
                      <>
                      <p className="year">{currentMonth[1] === 1 ? currentMonth[0] - 1 : currentMonth[0]}&nbsp;</p>
                      <p className="month">{currentMonth[1] === 1 ? 12 : currentMonth[1] - 1}月</p>
                      </>
                      ): <></>}
                    {i === 2? (
                      <>
                      <p className="year">
                      {currentMonth[0]}&nbsp;
                      </p>
                      <p className="month">
                      {currentMonth[1]}月
                      </p>
                      </>
                    ): <></>}
                    </>
                  ):<></>
                }
              </div>
              <p className="depart_info"></p>

              {/* <div className="date">
                {activeMonth === 0? (
                  <>
                  {i === 0? (
                  <>
                  <p className="year">{currentMonth[0]}&nbsp;</p>
                  <p className="month">{currentMonth[1]}月</p>
                  </>
                  ): <></>}
                  {i === 1? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 12 ? currentMonth[0] + 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 12 ? 1 : currentMonth[1] + 1}月
                  </p>
                  </>
                  ): <></>}
                  {i === 2? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 11 ? currentMonth[0] + 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 11 ? 1 : currentMonth[1] + 2}月
                  </p>
                  </>
                  ): <></>}
                  </>
                  ) : <></>
                }
                {activeMonth === 1? (
                  <>
                  {i === 0? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 1 ? currentMonth[0] - 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 1 ? 12 : currentMonth[1] - 1}月
                  </p>
                  </>
                  ): <></>}
                  {i === 1? (
                  <>
                  <p className="year">{currentMonth[0]}&nbsp;</p>
                  <p className="month">{currentMonth[1]}月</p>
                  </>
                  ): <></>}
                  {i === 2? (
                  <>
                  <p className="year">
                    {currentMonth[1] === 12 ? currentMonth[0] + 1 : currentMonth[0]}&nbsp;
                  </p>
                  <p className="month">
                    {currentMonth[1] === 12 ? 1 : currentMonth[1] + 1}月
                  </p>
                  </>
                  ): <></>}
                  </>
                  ) : <></>
                }
                {activeMonth === 2? (
                    <>
                    {i === 0? (
                    <>
                      <p className="year">
                        {currentMonth[1] <= 2 ? currentMonth[0] - 1 : currentMonth[0]}&nbsp;
                      </p>
                      <p className="month">
                        {currentMonth[1] <= 2 ? (currentMonth[1] === 2? 12: 11) : currentMonth[1] - 2}月
                      </p>
                    </>
                    ): <></>}
                    {i === 1? (
                      <>
                      <p className="year">{currentMonth[1] === 1 ? currentMonth[0] - 1 : currentMonth[0]}&nbsp;</p>
                      <p className="month">{currentMonth[1] === 1 ? 12 : currentMonth[1] - 1}月</p>
                      </>
                      ): <></>}
                    {i === 2? (
                      <>
                      <p className="year">
                      {currentMonth[0]}&nbsp;
                      </p>
                      <p className="month">
                      {currentMonth[1]}月
                      </p>
                      </>
                    ): <></>}
                    </>
                  ):<></>
                }
              </div>
              <p className="depart_info"></p> */}
            </div>
          )
        })}
        </div>
        <div className={`arrow next_month ${currentMonth === [monthRange.largest.year, monthRange.largest.month]? 'disabled':''}`}
          onClick={() => {
            getNextMonth();
          }}
        >
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="bottom_container">
        <div className="weeks_wrap">
          {daysOfWeek.map((day, i) => {
            return (
              <p className="week_day" key={i}>
                {day}
              </p>
            );
          })}
        </div>
        <div className="days_calender">
          { // 判斷前面需要幾個灰色框框aka本月從星期幾開始
            Array(currentDays.firstDayOfWeek)
              .fill(1)
              .map((day, i) => {
                return <div className="day no_date" key={i}></div>;
              })
          }
          {// 把本月天數白色格子跑出來+有資料就帶入
            Array(currentDays.days)
              .fill(1)
              .map((date, idx) => {
                return currentDetails?.map((d, i) => {
                  {/* 判斷「當筆資料日期=顯示出來的格子日期」？ */}
                  const dateMatch = d.date.slice(-2) === (idx+1).toString().padStart(2, '0');
                  return dateMatch? (
                      <div className="day date" key={i + 1}>
                      {dateMatch.guaranteed? <div className="day_tag">成團</div>: <></>}
                      <div className="day_top">
                        <p className="date_number">{i + 1}</p>
                        <div className="dot"></div>
                      </div>
                      <ul className="day_bottom">
                        <li className="day_details status available">{d.status}</li>
                        <li className="day_details available_vancancy">
                          可賣：{d.availableVancancy}
                        </li>
                        <li className="day_details total_vacnacy">團位：{d.totalVacnacy}</li>
                        <li className="day_details price">
                          ${Intl.NumberFormat().format(d.price)}
                        </li>
                        {/* 如果看更多就是只顯示這兩項  */}
                        {/* <li className="details_flex">
                          <p className="day_details link">看更多團</p>
                          <i className="day_details link fa-solid fa-caret-right"></i>
                        </li>
                        <li className="day_details price">${Intl.NumberFormat().format(76263)}<span>起</span>
                        </li> */}
                      </ul>
                      </div>
                    ):(
                      <div className="day date" key={i + 1}>
                        <div className="day_top">
                          <p className="date_number">{i + 1}</p>
                        </div>
                      </div>
                    )
                })}
              )
          }
          
        </div>
      </div>
    </div>
  );
}

export default Calendar;
