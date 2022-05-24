import "antd/dist/antd.css";
import React, { useState } from "react";
import { Calendar } from "antd";
import type { CalendarMode } from "antd/lib/calendar/generateCalendar";
import type { Moment } from "moment";

const App: React.FC = () => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const onChage = (value: Moment, mode: CalendarMode) => {
    setResult(value.format("YYYY-MM-DD"));
    // console.log(result);
    setResult2(value.format("MM"));
  };

  return (
    <div className="site-calendar-demo-card">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onChange={onChage}
      />
      {result} <br />
      {result2}
    </div>
  );
};

export default App;
