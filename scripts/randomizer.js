export const dataRandomizer = () => {
  return Math.floor(Math.random() * 10);
  // recall that 0 index exists - write exception re 10 index
  // to indicate a band having the night off
};

export const dateRandomizer = () => {
  const now = new Date();
  const daysToAdd = Math.floor(Math.random() * 30);
  const futureDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysToAdd
  );

  return futureDate.toDateString();
};
