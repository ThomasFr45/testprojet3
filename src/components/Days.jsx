import { format, startOfWeek, addDays } from "date-fns";

const RenderDays = ({ currentMonth }) => {
  const dateFormat = "dddd";
  const days = [];

  let startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return null;
}
// <div className="days row">{days}</div> <-- disabled the return for now
export default RenderDays