function formatCustomDate(date: Date): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export default formatCustomDate;

// at ${formattedHours}:${minutes
//     .toString()
//     .padStart(2, "0")} ${period}
