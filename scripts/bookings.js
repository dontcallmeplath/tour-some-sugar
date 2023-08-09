import { getBands, getVenues } from "./database.js";
import { dateRandomizer } from "./randomizer.js";
import { dataRandomizer } from "./randomizer.js";

const rando = dataRandomizer();
const bands = getBands();
const venues = getVenues();

export const getBookings = () => {
  const bandName = bands[rando].name;
  const venueName = venues[rando].name;
  const datePlaying = dateRandomizer();
  let bookingHTML = "<ul>";
  let counter = 0;
  if (counter <= 10) {
    counter++;
    bookingHTML += `<li>${bandName} is playing at ${venueName} on ${datePlaying}.</li>`;
  }
  bookingHTML += "</ul>";
  return bookingHTML;
};
