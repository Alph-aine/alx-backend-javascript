/**
 *
 * @param {*Array} studentList - an Array of students
 * @param {*string} city - a string containing the desired student locations
 * @param {*Array} newGrades - the grade to be attached t qualified student
 * @returns - a new array modified based on the data given
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!Array.isArray(studentList)) return [];
  return studentList
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade),
    }));
}
