/* eslint-disable no-underscore-dangle */
/**
 * HolbertonCourse - A class for courses.
 */

export default class HolbertonCourse {
  /**
     *
     * @param {String} name - Course name.
     * @param {Number} length  - Course duration/length
     * @param {Array} students  - Students attending
     */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * Gets the length of the course
   */
  get length() {
    return this._length;
  }

  /**
   * Gets the students taking the course
   */
  get students() {
    return this._students;
  }

  /**
   * sets the name of the course
   */
  set name(name) {
    try {
      if (typeof name !== 'string') throw TypeError('Name must be a string');
      this._name = name;
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * set the length od the course
   */
  set length(length) {
    try {
      if (typeof length !== 'number') throw TypeError('Length must be a number');
      this._length = length;
    } catch (err) {
      console.error(err);
    }
  }

  set students(students) {
    try {
      if (Array.isArray(students) === false || students.every((student) => typeof student === 'string') === false) {
        throw TypeError('Students must be an array of strings');
      }
      this._students = students;
    } catch (err) {
      console.error(err);
    }
  }
}
