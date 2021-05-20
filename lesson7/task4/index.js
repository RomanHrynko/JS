const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList.filter(name => !studentsForRetake.includes(name));

  return passedStudents.map(name => 'Good job, ' + name);
};

const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));
