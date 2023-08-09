import { dataRandomizer } from "./randomizer.js";
const rando = dataRandomizer();

const database = {
  venues: [
    {
      id: 1,
      name: "Melody Mansion",
      address: "789 Harmony Street, Musicville",
      squareFootage: 12000,
      capacity: 2000,
    },
    {
      id: 2,
      name: "Symphony Hall",
      address: "456 Crescendo Avenue, Orchestratown",
      squareFootage: 10000,
      capacity: 1500,
    },
    {
      id: 3,
      name: "Rhythm Arena",
      address: "123 Beat Boulevard, Groovetown",
      squareFootage: 8000,
      capacity: 1800,
    },
    {
      id: 4,
      name: "Harmonics Pavilion",
      address: "234 Chord Lane, Harmonyville",
      squareFootage: 15000,
      capacity: 2500,
    },
    {
      id: 5,
      name: "Tempo Theater",
      address: "567 Meter Road, Beatville",
      squareFootage: 7000,
      capacity: 1200,
    },
    {
      id: 6,
      name: "Aria Auditorium",
      address: "890 Song Street, Serenatown",
      squareFootage: 11000,
      capacity: 1700,
    },
    {
      id: 7,
      name: "Cadence Center",
      address: "678 Harmony Avenue, Melodyville",
      squareFootage: 9500,
      capacity: 1600,
    },
    {
      id: 8,
      name: "Euphony Stadium",
      address: "345 Melody Lane, Chordburg",
      squareFootage: 18000,
      capacity: 3000,
    },
    {
      id: 9,
      name: "Groove Gallery",
      address: "789 Tempo Road, Rhythmtown",
      squareFootage: 6000,
      capacity: 1000,
    },
    {
      id: 10,
      name: "Chorus Hall",
      address: "1234 Harmony Lane, Singville",
      squareFootage: 8500,
      capacity: 1400,
    },
  ],
  bands: [
    {
      id: 1,
      name: "Lunar Echoes",
      genre: "Rock",
      members: 3,
      yearformed: 2012,
      venueid: rando,
    },
    {
      id: 2,
      name: "Starshine Symphony",
      genre: "Pop",
      members: 2,
      yearformed: 2020,
      venueid: rando,
    },
    {
      id: 3,
      name: "Neon Rhymes",
      genre: "Hip Hop",
      members: 4,
      yearformed: 2015,
      venueid: rando,
    },
    {
      id: 4,
      name: "Cyber Pulse",
      genre: "Electronic",
      members: 1,
      yearformed: 2021,
      venueid: rando,
    },
    {
      id: 5,
      name: "Sapphire Serenades",
      genre: "Jazz",
      members: 5,
      yearformed: 2005,
      venueid: rando,
    },
    {
      id: 6,
      name: "Whiskey Trails",
      genre: "Country",
      members: 7,
      yearformed: 2000,
      venueid: rando,
    },
    {
      id: 7,
      name: "Midnight Moan",
      genre: "Blues",
      members: 3,
      yearformed: 2019,
      venueid: rando,
    },
    {
      id: 8,
      name: "Ethereal Elegance",
      genre: "Classical",
      members: 12,
      yearformed: 2002,
      venueid: rando,
    },
    {
      id: 9,
      name: "Mystic Caravan",
      genre: "Folk",
      members: 3,
      yearformed: 2003,
      venueid: rando,
    },
    {
      id: 10,
      name: "Velvet Essence",
      genre: "R&B",
      members: 6,
      yearformed: 2004,
      venueid: rando,
    },
  ],
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};

export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};