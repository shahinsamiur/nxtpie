export function daysLeftFromToday(dateStr) {
  // Split the input string and create a Date object
  const [day, month, year] = dateStr.split("/").map(Number);
  const targetDate = new Date(year, month - 1, day); // Month is 0-indexed

  // Get today's date with the time set to midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds
  const diffInMilliseconds = targetDate - today;

  // Convert the difference to days
  const daysLeft = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return daysLeft;
}


