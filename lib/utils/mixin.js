/**
 * @Description Mix a method or parameter into an object.
 * @param {Function} callback callback
 */

const _ = require('lodash');

function mixin(targetClass, descriptor, propertyName, propertyValue) {
  Object.defineProperty(targetClass.prototype, propertyName, {
    enumerable: descriptor === 'public' ? true : false,
    configurable: true,
    writable: true,
    value: propertyValue
  });
}

module.exports = mixin;