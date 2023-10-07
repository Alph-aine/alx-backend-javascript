/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(brand) {
    if (typeof brand !== 'string') {
      throw TypeError('Brand must be a string');
    }
    this._brand = brand;
  }

  set motor(motor) {
    if (typeof motor !== 'string') {
      throw TypeError('Motor must be a string');
    }
    this._motor = motor;
  }

  set color(color) {
    if (typeof color !== 'string') {
      throw TypeError('Color must be a string');
    }
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species](this._brand, this._motor, this._color);
  }
}
