import { getBands, getVenues } from "./database.js";
const bands = getBands();
const venues = getVenues();
const venueArray = [];

export const showBands = () => {
  let bandHTML = `<ul id="listitem"> `;
  bands.forEach((band) => {
    bandHTML += `<li  data-type="band" data-id="${band.id}">${band.name}</li>`;
  });
  bandHTML += "</ul>";
  return bandHTML;
};

const makeArray = () => {
  for (const venue of venues) {
    venueArray.push(venue.bandid);
  }
};
makeArray();

document.addEventListener("click", (clickEvent) => {
  const clickedItem = clickEvent.target;
  const item = clickedItem.dataset;
  const id = parseInt(item.id);

  let string = `This band is playing the following venue: `;
  // ensures procedure only runs when a band is clicked
  if (item.type === "band") {
    if (venueArray.includes(id)) {
      // looks thru data of venues
      for (const venue of venues) {
        // matches the found # in venueArray to the database of venues
        if (id === venue.id) {
          // pulls the name of the matched venue
          string += `${venue.name}`;
        }
      }
    }
    clickedItem.innerHTML = string;
    return string;
  }
});
