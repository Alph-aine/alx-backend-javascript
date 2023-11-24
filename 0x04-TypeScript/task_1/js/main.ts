// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attribute
}

// Create a function to initialize a Teacher object
function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  attributes: Record<string, any> = {}
): Teacher {
  // Create a new Teacher object with specified attributes
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...attributes,
  };

  // Make firstName and lastName readonly after initialization
  Object.freeze(teacher);

  return teacher;
}

// Example usage
const teacher3: Teacher = createTeacher('John', 'Doe', false, 'London', { contract: false });

console.log(teacher3);
