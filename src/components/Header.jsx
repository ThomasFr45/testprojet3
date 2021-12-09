import { format, addMonths, subMonths } from "date-fns";
const RenderHeader= ({ currentMonth, setCurrentMonth }) => {
  const dateFormat = "MMMM yyyy";
  const nextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1))
  };
  
  const prevMonth = () => {
      setCurrentMonth(subMonths(currentMonth, 1))
  };

  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>{format(currentMonth, dateFormat)}</span>
      </div>
      <div className="col col-end" onClick={nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );
}

export default RenderHeader;