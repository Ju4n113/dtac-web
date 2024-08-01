import React from 'react';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_07aca6fec70e46a654318d9175af8c733fbc1455a47aa001868f61e433a135d7@group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
