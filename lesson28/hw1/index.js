//put your code here
const shmoment = initValue => {
  const newDate = new Date(initValue);
  const objDate = {
    add(typeOfDate, value) {
      switch (typeOfDate) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() + value);
          return this;

        case 'months':
          newDate.setMonth(newDate.getMonth() + value);
          return this;

        case 'days':
          newDate.setDate(newDate.getDate() + value);
          return this;

        case 'hours':
          newDate.setHours(newDate.getHours() + value);
          return this;

        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() + value);
          return this;

        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() + value);
          return this;

        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() + value);
          return this;
      }
    },
    subtract(typeOfDate, value) {
      switch (typeOfDate) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() - value);
          return this;

        case 'months':
          newDate.setMonth(newDate.getMonth() - value);
          return this;

        case 'days':
          newDate.setDate(newDate.getDate() - value);
          return this;

        case 'hours':
          newDate.setHours(newDate.getHours() - value);
          return this;

        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() - value);
          return this;

        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() - value);
          return this;

        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() - value);
          return this;
      }
    },
    result() {
      return new Date(newDate);
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
