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
    if (typeof name !== 'string') throw new Error('Name must be a string');
    if (typeof length !== 'number') throw new Error('Length must be a number');
    if (!Array.isArray(students)) throw new Error('Students list must be an array');
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
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * set the length od the course
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (Array.isArray(students) === false || students.every((student) => typeof student === 'string') === false) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
