const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);

  const dateInFuture = new Date(date).setDate(day + days);
  console.log(new Date(dateInFuture));

  return daysOfWeek[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2021, 5, 2), 30);
console.log(result);
