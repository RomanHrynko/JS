const studentsBirthDays = students => {
  const objStudents = {};
  const nameMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const sortStudents = students
    .slice()
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());
  console.log(sortStudents);
  sortStudents.map(el => {
    const month = new Date(el.birthDate).getMonth();

    console.log(month);
    if (objStudents[nameMonths[month]] === undefined) {
      objStudents[nameMonths[month]] = [];
    }
    objStudents[nameMonths[month]].push(el.name);
  });

  return objStudents;
};

const student = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Bob', birthDate: '05/13/2011' },
  { name: 'Ann', birthDate: '07/15/2015' },
];
console.log(studentsBirthDays(student));
