import { getVenues, getBands } from "./database.js";
import { getBookings } from "./bookings.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>TOUR SOME SUGAR ON ME</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${getBookings()}
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
      
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
      
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;

console.log(getVenues());
console.log(getBands());
