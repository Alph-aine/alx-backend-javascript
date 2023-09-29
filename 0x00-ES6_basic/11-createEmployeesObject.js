export default function createEmployeesObject(departmentName, employees) {
  const details = {
    departmentName: employees.map((employee) => employee),
  };

  return details;
}
