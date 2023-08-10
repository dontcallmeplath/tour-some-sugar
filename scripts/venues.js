import { getVenues, getBands } from "./database.js";
import { dataRandomizer } from "./randomizer.js";
const venues = getVenues();
const bands = getBands();
const bandArray = [];

export const showVenues = () => {
  let venueHTML = `<ul id="venues">`;
  venues.forEach((venue) => {
    venueHTML += `<li data-type="venue" data-id="${dataRandomizer()}">${
      venue.name
    }</li>`;
  });
  venueHTML += "</ul>";
  return venueHTML;
};

const makeArray = () => {
  for (const band of bands) {
    bandArray.push(band.venueid);
  }
};
makeArray();

document.addEventListener("click", (clickEvent) => {
  const clickedItem = clickEvent.target;
  const item = clickedItem.dataset;
  const id = parseInt(item.id);
  let string = `The following bands are playing this venue: `;

  if (item.type === "venue") {
    bandArray.forEach((num) => {
      if (num === id) {
        for (const band of bands) {
          if (id === band.id) {
            string += `${band.name} `;
          }
        }
        return string;
      }
    });
  }
  clickedItem.innerHTML = string;
});
