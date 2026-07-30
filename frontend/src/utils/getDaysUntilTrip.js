function getDaysUntilTrip(startDate) {
  const today = new Date();

  const todayInMilliseconds = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const [year, month, day] = startDate.split("-").map(Number);

  const startDateInMilliseconds = Date.UTC(year, month - 1, day);

  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  return Math.round(
    (startDateInMilliseconds - todayInMilliseconds) / millisecondsPerDay,
  );
}

export default getDaysUntilTrip;
