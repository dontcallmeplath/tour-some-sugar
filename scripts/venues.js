import { getVenues } from "./database.js";
const venues = getVenues();

export const showVenues = () => {
  let venueHTML = "<ul>";
  venues.forEach((venue) => {
    venueHTML += `<li>${venue.name}</li>`;
  });
  venueHTML += "</ul>";
  return venueHTML;
};
