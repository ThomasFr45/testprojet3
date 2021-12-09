
import React, { useState } from "react";
import RenderHeader from "./Header";
import RenderDays from "./Days";
import RenderCells from "./Cells";
import './booking.css';
import checkBookings from "./checkBookings";

const Calendar = () => {
  
  const [ currentMonth, setCurrentMonth ] = useState(new Date());
  const [ selectedDate, setSelectedDate ] = useState(new Date());
  const [checkDate, available] = checkBookings(selectedDate);

    return (
      <div className='booking-body'>
        <div className="calendar">
        <RenderHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
        <RenderDays currentMonth={currentMonth}/>
        <RenderCells currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>
      <div className='available'>
        <h4>Créneaux disponibles</h4>
        <p className='selected-date'>{checkDate}</p>
        <ul>
        {available.map((creneau, index) => <li key={index}>{creneau.start} - {creneau.end} | {creneau.price}</li>)}
        </ul>
      </div>
      </div>
    );
}

//{available.map(creneau => <li>{creneau.start} - {creneau.end}</li>)}
export default Calendar;