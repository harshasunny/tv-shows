function arrayToList (data) {
  if (!data) return "";
  return data.join(", ");
}

function dateMonthYear (dateString) {
  if (!dateString) return "";
  let date = new Date(dateString);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[date.getMonth()] + ", " + date.getFullYear();
}
function capitalize (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export {
  arrayToList, dateMonthYear, capitalize
}
