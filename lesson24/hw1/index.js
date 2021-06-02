export const getDiff = (startDate, endDate) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const different = Math.abs(new Date(startDate) - new Date(endDate));
  console.log(different);

  const days = Math.floor(different / day);
  console.log(days);

  const hours = Math.floor((different % day) / hour);
  console.log(hours);

  const minutes = Math.floor((different % hour) / minute);
  console.log(minutes);

  const seconds = Math.floor((different % minute) / second);
  console.log(seconds);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const start = new Date(2015, 5, 22, 12, 54, 12);
const end = new Date(2016, 3, 19, 12, 44, 33);
console.log(getDiff(start, end));
