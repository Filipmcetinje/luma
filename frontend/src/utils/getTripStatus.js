function getTripStatus(startDate, endDate) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  if (todayDate < startDate) {
    return "Upcoming";
  }

  if (todayDate > endDate) {
    return "Completed";
  }

  return "Active";
}

export default getTripStatus;