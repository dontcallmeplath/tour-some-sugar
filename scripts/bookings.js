import { getBands, getVenues } from "./database.js";
import { dateRandomizer } from "./randomizer.js";
import { dataRandomizer } from "./randomizer.js";

const bands = getBands();
const venues = getVenues();

export const getBookings = () => {
  let bookingHTML = "<ul>";
  for (const band of bands) {
    bookingHTML += `<li data-type="booking" data-bandid="${band.id}">${
      band.name
    } is playing at ${
      venues[dataRandomizer()].name
    } on ${dateRandomizer()}.</li>`;
  }
  bookingHTML += "</ul>";
  return bookingHTML;
};

const getBandObject = (clickedItem, bandArray) => {
  bandArray.forEach((band) => {
    if (band.id === parseInt(clickedItem.dataset.bandid)) {
      clickedItem.innerHTML = `${band.name} is a ${band.genre} band that formed in ${band.yearformed} and has ${band.members} members.`;
    }
  });
};

document.addEventListener("click", (clickEvent) => {
  const item = clickEvent.target;
  if (item.dataset.type === "booking") {
    getBandObject(item, bands);
  }
});
