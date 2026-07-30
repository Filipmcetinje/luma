function getTripProgress(startDate, endDate) {
  const today = new Date();

  const todayInMilliseconds = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const [startYear, startMonth, startDay] = startDate.split("-").map(Number);
  const [endYear, endMonth, endDay] = endDate.split("-").map(Number);

  const startInMilliseconds = Date.UTC(startYear, startMonth - 1, startDay);

  const endInMilliseconds = Date.UTC(endYear, endMonth - 1, endDay);

  if (startInMilliseconds === endInMilliseconds) {
    return 100;
  }

  const totalDuration = endInMilliseconds - startInMilliseconds;
  const elapsedDuration = todayInMilliseconds - startInMilliseconds;
  const progress = (elapsedDuration / totalDuration) * 100;

  return Math.min(100, Math.max(0, Math.round(progress)));
}

export default getTripProgress;
