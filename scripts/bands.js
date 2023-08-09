import { getBands } from "./database.js";
const bands = getBands();

export const showBands = () => {
  let bandHTML = "<ul>";
  bands.forEach((band) => {
    bandHTML += `<li>${band.name}</li>`;
  });
  bandHTML += "</ul>";
  return bandHTML;
};
