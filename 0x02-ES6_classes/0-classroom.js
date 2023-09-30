/**
 * Represents a ClassRoom
 */

export default class ClassRoom {
  /**
     *
     * @param {Number} maxStudentsSize - The maximum number of students.
     */
  constructor(maxStudentsSize) {
    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}
