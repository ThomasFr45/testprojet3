import { creneaux, bookings } from './data.js';

const checkBookings = (selectedDate) => {
  let checkDate = selectedDate.toString().split('')
  checkDate.length = 15
  checkDate = checkDate.join('')

    const available = [];
    let check = true;
    for(let i = 0; i<creneaux.length; i++){
      for(let y = 0; y<bookings.length; y++) {
        if(creneaux[i].id === bookings[y].creneau_id && checkDate === bookings[y].date) {
          check=false;
        }
      }
      if (check === true) available.push(creneaux[i])
      check = true;
    }
    return ([checkDate, available]);
}

export default checkBookings;