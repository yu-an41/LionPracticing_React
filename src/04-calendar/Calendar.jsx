import React from 'react'

function Calendar() {
  return (
    <div>
      <div className="top_container">
        <div className="prev_month">
          <div className="arrow prev_arrow"></div>
        </div>
        <div className="months_tabs">
          <div className="monthly_tab">
            <div className="tab_container prev_tab"></div>
            <div className="tab_container current_tab"></div>
            <div className="tab_container next_tab"></div>
          </div>
        </div>
        <div className="next_month">
        <div className="arrow next_arrow"></div>
        </div>
      </div>
      <div className="bottom_container">

      </div>
    </div>
  )
}

export default Calendar 