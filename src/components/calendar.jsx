/* eslint-disable import/no-extraneous-dependencies */
import Calendar from 'react-calendar';
import React, { useState } from 'react';

function CalendarComponent() {
  const [value, onChange] = React.useState(new Date());

  return (
    <div>
      <div className="calendar-container">
        <h1>Calendar</h1>
        <Calendar
          className="calendar"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default CalendarComponent;