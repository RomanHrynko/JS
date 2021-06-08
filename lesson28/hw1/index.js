//put your code here
const changeDate = (newDate, typeOfDate, value) => {
  switch (typeOfDate) {
    case 'years':
      return newDate.setFullYear(newDate.getFullYear() + value);

    case 'months':
      return newDate.setMonth(newDate.getMonth() + value);

    case 'days':
      return newDate.setDate(newDate.getDate() + value);

    case 'hours':
      return newDate.setHours(newDate.getHours() + value);

    case 'minutes':
      return newDate.setMinutes(newDate.getMinutes() + value);

    case 'seconds':
      return newDate.setSeconds(newDate.getSeconds() + value);

    case 'milliseconds':
      return newDate.setMilliseconds(newDate.getMilliseconds() + value);
  }
};

const shmoment = initValue => {
  let res = new Date(initValue);
  const objDate = {
    add(typeOfDate, value) {
      res = new Date(changeDate(res, typeOfDate, value));
      return this;
    },

    subtract(typeOfDate, value) {
      res = new Date(changeDate(res, typeOfDate, -value));
      return this;
    },

    result() {
      return new Date(res);
    },
  };

  return objDate;
};

const check = shmoment(new Date(2021, 5, 7, 17, 17, 17))
  .add('years', 5)
  .subtract('years', 3)
  .result();
const check2 = shmoment(new Date(2021, 5, 7, 17, 17, 17))
  .add('months', 1)
  .subtract('milliseconds', 5000)
  .result();
const check3 = shmoment(new Date(2021, 5, 7, 17, 17, 17)).add('days', 5).result();
const check4 = shmoment(new Date(2021, 5, 7, 17, 17, 17)).add('hours', 5).result();
const check5 = shmoment(new Date(2021, 5, 7, 17, 17, 17)).add('hours', 5).result();
console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);
console.log(check5);
