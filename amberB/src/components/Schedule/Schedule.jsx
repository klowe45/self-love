import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <section className="schedule">
      <h1 className="schedule__title">Schedule Your Service</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate}
      />
    </section>
  );
}

export default Schedule;
