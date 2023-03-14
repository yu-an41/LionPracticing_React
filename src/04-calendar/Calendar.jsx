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
  // console.log(datas);

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

  // 反白（當天月份）位置
  const [activeMonth, setActiveMonth] = useState(1);

  // 顯示的三個月份以及當前月份
  const [currentMonthIdx, setCurrentMonthIdx] = useState(1);
  const [shownMonths, setShownMonths] = useState([
    monthRange.largest.month <= 2?
      monthRange.largest.month === 1?
        {
          year: monthRange.largest.year - 1,
          month: 11,
        }
        :{
          year: monthRange.largest.year - 1,
          month: 12,
        }
    :{
      year: monthRange.largest.year,
      month: monthRange.largest.month - 2,
    },
    monthRange.largest.month === 1?
    {
      year: monthRange.largest.year - 1,
      month: 12
    }
    :{
      year: monthRange.largest.year,
      month:monthRange.largest.month - 1,
    },
    {
      year: monthRange.largest.year,
      month: monthRange.largest.month,
    }
  ]);

  // 當前月份（預設值是一進來的瀏覽月份aka資料中最大月份的前一個月）
  const [currentMonth, setCurrentMonth] = useState([shownMonths[currentMonthIdx].year, shownMonths[currentMonthIdx].month]);

  // 當前月份共幾天、第一天最後一天分別是星期幾
  const thisMonth = currentMonth[1] === 0? 
  [currentMonth[0] - 1, 11]:
  [currentMonth[0], currentMonth[1] - 1];
  const firstDay = new Date(thisMonth[0], thisMonth[1], 1);
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

  // 左右箭頭功能（前後月）
  const getPrevMonth = () => {
    // 如果tab在左邊，shownMonths往前長
    if (currentMonthIdx === 0) {
      const newMonth = 
      shownMonths[0].month === 1?
      {
        year: currentMonth[0] - 1,
        month: 12,
      }
      :{
        year: currentMonth[0],
        month: currentMonth[1] - 1,
      };
      console.log(newMonth);
      const months = shownMonths;
      months.pop();
      months.unshift(newMonth);
      console.log([newMonth, ...shownMonths.slice(0, 2)])
      setShownMonths(months);
    }
    // currentMonthIdx - 1
    setCurrentMonthIdx(currentMonthIdx === 0? 0: currentMonthIdx - 1);
    setCurrentMonth([shownMonths[currentMonthIdx].year, shownMonths[currentMonthIdx].month]);
  }

  const getNextMonth = () => {
    // 如果tab在右邊，shownMonths往後長
    if (currentMonthIdx === 2) {
      const newMonth = 
      shownMonths[2].month === 12?
      {
        year: currentMonth[0] + 1,
        month: 1,
      }
      :{
        year: currentMonth[0],
        month: currentMonth[1] + 1,
      };
      const months = shownMonths;
      months.shift();
      months.push(newMonth);
      setShownMonths(months);
    }
    // currentMonthIdx + 1
    setCurrentMonthIdx(currentMonthIdx === 2? 2: currentMonthIdx + 1);
    setCurrentMonth([shownMonths[currentMonthIdx].year, shownMonths[currentMonthIdx].month]);
    }

  // 點月份tab切換currentMonth
  const handleTabClick = (e,i)=> {
    console.log(i)
    // e.stopPropagation();
    setCurrentMonthIdx(i);
    setCurrentMonth([shownMonths[currentMonthIdx].year, shownMonths[currentMonthIdx].month]);
  }

  // 判斷某個月份有沒有資料
  const hasDetails = (idx) => {
    const result = datas.filter((v) => { 
      return v.date.includes(`${shownMonths[idx]?.year}/${shownMonths[idx]?.month}`)
    })
    return (result.length !== 0);
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
  const getCurrentDetails = (idx1, idx2) => {
    // console.log(currentMonth[0], currentMonth[1])
    const details = datas.filter((v, i) => {
      // return v.date.includes(`2018/09`);
      return v.date.includes(`${idx1}/${idx2}`);
    });

    // 依照日期由小到大排序
    details.sort((a, b) => {
      const dayA = new Date(a.date).getTime();
      const dayB = new Date(b.date).getTime();
      return dayA - dayB;
    })
    // console.log(details);
    setCurrentDetails(details);
    return details;
  }

  // 抓當天的資料
  const getDateDetails = (arr, day) => {
    const dateDetail =  arr.filter((d) => d.date.slice(-2) === day.toString().padStart(2, '0'))
    return dateDetail;
  }
  // 當天資料有多筆的話找最小值（把當天資料傳進來）
  const getLowestPrice = (d) => {
    d.sort((a, b) => a.price - b.price);
    return d[0].price;
  }

  useEffect(() => {
    getCurrentDays();
    getCurrentDetails(currentMonth[0], currentMonth[1]);
  }, [currentMonth])

  useEffect(() => {
    setCurrentMonth([shownMonths[currentMonthIdx].year, shownMonths[currentMonthIdx].month]);
  }, [currentMonthIdx])

  return (
    <div className="calendar_container">
      <div className="top_container">
        <div className={`arrow prev_month`}
          onClick={()=> {
            if (currentMonth !== [monthRange.smallest.year, monthRange.smallest.month]) getPrevMonth();
          }}
          >
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div className="monthly_tab">
        {shownMonths.map((m, i) => {
          return (
            <div key={i} className={`tab_container ${currentMonthIdx === i? 'current_tab':''}`}
            onClick={(e) => {
              handleTabClick(e,i);
            }}>
              <div className="date">
                <p className="year">{m?.year}&nbsp;</p>
                <p className="month">{m?.month}月</p>
              </div>
              {hasDetails(i)? 
              <></>: (
                <p  className="depart_info">無出團日</p>
              )
              }
            </div>
          )
        }) }
        </div>
        <div className={`arrow next_month`}
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
              .map((d, idx) => {
                const result = getDateDetails(currentDetails, idx+1);
                return result.length !== 0? (
                  result.length === 1? (
                    <div className="day date" key={idx + 1}>
                      {/* 只有一筆資料時 */}
                      <div className="day_top">
                        {result[0].guaranteed? (
                          <div className="day_tag">成團</div>
                        ) : <></>}
                        <p className="date_number">{idx + 1}</p>
                        <div className="dot"></div>
                      </div>
                      <ul className="day_bottom">
                        <li className={`day_details status ${(result[0].status === '報名' || result[0].status === '候補' || result[0].status === '預定')? 'available': 'unavailable'}`}>
                          {result[0].status}
                        </li>
                        <li className="day_details available_vancancy">
                          可賣：{result[0].availableVancancy}
                        </li>
                        <li className="day_details total_vacnacy">團位：{result[0].totalVacnacy}</li>
                        <li className="day_details price">
                            ${Intl.NumberFormat().format(result[0].price)}
                        </li>
                      </ul>
                    </div>
                  ) :(
                    <div className="day date" key={idx + 1}>
                      {/* 不只一筆資料時 */}
                      <div className="day_top">
                        <p className="date_number">{idx + 1}</p>
                      </div>
                      <ul className="day_bottom">
                        <li className="details_flex">
                            <p className="day_details link">看更多團</p>
                            <i className="day_details link fa-solid fa-caret-right"></i>
                        </li>
                        <li className="day_details price">${Intl.NumberFormat().format(getLowestPrice(result))}<span>&nbsp;起</span>
                        </li>
                      </ul>
                    </div>
                  )
                ) : (
                  <div className="day date" key={idx + 1}>
                      <div className="day_top">
                        <p className="date_number">{idx + 1}</p>
                      </div>
                      <ul className="day_bottom"></ul>
                  </div>
                )
                }
              )
            }
        </div>
      </div>
    </div>
  );
}

export default Calendar;
