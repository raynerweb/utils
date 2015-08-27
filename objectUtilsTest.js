var objectUtils = require('./objectUtils');
var assert =  require('assert');


//Testing isUndefined()
assert.equal(objectUtils.isUndefined(), true);
assert.equal(objectUtils.isUndefined({}), false);
assert.equal(objectUtils.isUndefined({0 : 'teste'}), false);
assert.equal(objectUtils.isUndefined([]), false);
assert.equal(objectUtils.isUndefined([0,1]), false);
assert.equal(objectUtils.isUndefined(0), false);
assert.equal(objectUtils.isUndefined(''), false);
assert.equal(objectUtils.isUndefined('0'), false);
assert.equal(objectUtils.isUndefined('teste'), false);
assert.equal(objectUtils.isUndefined(NaN), false);
assert.equal(objectUtils.isUndefined(undefined), true);
assert.equal(objectUtils.isUndefined(function(){return true}), false);


//Testing isNumber
assert.equal(objectUtils.isNumber(), false);
assert.equal(objectUtils.isNumber({}), false);
assert.equal(objectUtils.isNumber({0 : 'teste'}), false);
assert.equal(objectUtils.isNumber([]), false);
assert.equal(objectUtils.isNumber([0,1]), false);
assert.equal(objectUtils.isNumber(0), true);
assert.equal(objectUtils.isNumber(''), false);
assert.equal(objectUtils.isNumber('0'), false);
assert.equal(objectUtils.isNumber('teste'), false);
assert.equal(objectUtils.isNumber(NaN), false);
assert.equal(objectUtils.isNumber(undefined), false);
assert.equal(objectUtils.isNumber(function(){return true}), false);

//Testing isNumeric
assert.equal(objectUtils.isNumeric(), false);
assert.equal(objectUtils.isNumeric({}), false);
assert.equal(objectUtils.isNumeric({0 : 'teste'}), false);
assert.equal(objectUtils.isNumeric([]), false);
assert.equal(objectUtils.isNumeric([0,1]), false);
assert.equal(objectUtils.isNumeric(0), true);
assert.equal(objectUtils.isNumeric(''), false);
assert.equal(objectUtils.isNumeric('0'), true);
assert.equal(objectUtils.isNumeric('teste'), false);
assert.equal(objectUtils.isNumeric(NaN), false);
assert.equal(objectUtils.isNumeric(undefined), false);
assert.equal(objectUtils.isNumeric(function(){return true}), false);

//Testing isZero
assert.equal(objectUtils.isZero(), false);
assert.equal(objectUtils.isZero({}), false);
assert.equal(objectUtils.isZero({0 : 'teste'}), false);
assert.equal(objectUtils.isZero([]), false);
assert.equal(objectUtils.isZero([0,1]), false);
assert.equal(objectUtils.isZero(0), true);
assert.equal(objectUtils.isZero(''), false);
assert.equal(objectUtils.isZero('0'), false);
assert.equal(objectUtils.isZero('teste'), false);
assert.equal(objectUtils.isZero(NaN), false);
assert.equal(objectUtils.isZero(undefined), false);
assert.equal(objectUtils.isZero(function(){return true}), false);

//Testing isEmptyString
assert.equal(objectUtils.isEmptyString(), false);
assert.equal(objectUtils.isEmptyString({}), false);
assert.equal(objectUtils.isEmptyString({0 : 'teste'}), false);
assert.equal(objectUtils.isEmptyString([]), false);
assert.equal(objectUtils.isEmptyString([0,1]), false);
assert.equal(objectUtils.isEmptyString(0), false);
assert.equal(objectUtils.isEmptyString(''), true);
assert.equal(objectUtils.isEmptyString('\n\t\r'), true);
assert.equal(objectUtils.isEmptyString('0'), false);
assert.equal(objectUtils.isEmptyString('teste'), false);
assert.equal(objectUtils.isEmptyString(NaN), false);
assert.equal(objectUtils.isEmptyString(undefined), false);
assert.equal(objectUtils.isEmptyString(function(){return true}), false);

//Testing isString
assert.equal(objectUtils.isString(), false);
assert.equal(objectUtils.isString({}), false);
assert.equal(objectUtils.isString({0 : 'teste'}), false);
assert.equal(objectUtils.isString([]), false);
assert.equal(objectUtils.isString([0,1]), false);
assert.equal(objectUtils.isString(0), false);
assert.equal(objectUtils.isString(''), true);
assert.equal(objectUtils.isString('\n\t\r'), true);
assert.equal(objectUtils.isString('0'), true);
assert.equal(objectUtils.isString('teste'), true);
assert.equal(objectUtils.isString(NaN), false);
assert.equal(objectUtils.isString(undefined), false);
assert.equal(objectUtils.isString(function(){return true}), false);

//Testing isFunction
assert.equal(objectUtils.isFunction(), false);
assert.equal(objectUtils.isFunction({}), false);
assert.equal(objectUtils.isFunction({0 : 'teste'}), false);
assert.equal(objectUtils.isFunction([]), false);
assert.equal(objectUtils.isFunction([0,1]), false);
assert.equal(objectUtils.isFunction(0), false);
assert.equal(objectUtils.isFunction(''), false);
assert.equal(objectUtils.isFunction('\n\t\r'), false);
assert.equal(objectUtils.isFunction('0'), false);
assert.equal(objectUtils.isFunction('teste'), false);
assert.equal(objectUtils.isFunction(NaN), false);
assert.equal(objectUtils.isFunction(undefined), false);
assert.equal(objectUtils.isFunction(function(){return true}), true);

//Testing isObjectOrArray
assert.equal(objectUtils.isObjectOrArray(), false);
assert.equal(objectUtils.isObjectOrArray({}), true);
assert.equal(objectUtils.isObjectOrArray({0 : 'teste'}), true);
assert.equal(objectUtils.isObjectOrArray([]), true);
assert.equal(objectUtils.isObjectOrArray([0,1]), true);
assert.equal(objectUtils.isObjectOrArray(0), false);
assert.equal(objectUtils.isObjectOrArray(''), false);
assert.equal(objectUtils.isObjectOrArray('\n\t\r'), false);
assert.equal(objectUtils.isObjectOrArray('0'), false);
assert.equal(objectUtils.isObjectOrArray('teste'), false);
assert.equal(objectUtils.isObjectOrArray(NaN), false);
assert.equal(objectUtils.isObjectOrArray(undefined), false);
assert.equal(objectUtils.isObjectOrArray(function(){return true}), false);

//Testing isArray
assert.equal(objectUtils.isArray(), false);
assert.equal(objectUtils.isArray({}), false);
assert.equal(objectUtils.isArray({0 : 'teste'}), false);
assert.equal(objectUtils.isArray([]), true);
assert.equal(objectUtils.isArray([0,1]), true);
assert.equal(objectUtils.isArray(0), false);
assert.equal(objectUtils.isArray(''), false);
assert.equal(objectUtils.isArray('\n\t\r'), false);
assert.equal(objectUtils.isArray('0'), false);
assert.equal(objectUtils.isArray('teste'), false);
assert.equal(objectUtils.isArray(NaN), false);
assert.equal(objectUtils.isArray(undefined), false);
assert.equal(objectUtils.isArray(function(){return true}), false);

//Testing isObject
assert.equal(objectUtils.isObject(), false);
assert.equal(objectUtils.isObject({}), true);
assert.equal(objectUtils.isObject({0 : 'teste'}), true);
assert.equal(objectUtils.isObject([]), false);
assert.equal(objectUtils.isObject([0,1]), false);
assert.equal(objectUtils.isObject(0), false);
assert.equal(objectUtils.isObject(''), false);
assert.equal(objectUtils.isObject('\n\t\r'), false);
assert.equal(objectUtils.isObject('0'), false);
assert.equal(objectUtils.isObject('teste'), false);
assert.equal(objectUtils.isObject(NaN), false);
assert.equal(objectUtils.isObject(undefined), false);
assert.equal(objectUtils.isObject(function(){return true}), false);

//Testing hasElements
assert.equal(objectUtils.hasElements(), false);
assert.equal(objectUtils.hasElements({}), false);
assert.equal(objectUtils.hasElements({0 : 'teste'}), true);
assert.equal(objectUtils.hasElements([]), false);
assert.equal(objectUtils.hasElements([0,1]), true);
assert.equal(objectUtils.hasElements(0), false);
assert.equal(objectUtils.hasElements(''), false);
assert.equal(objectUtils.hasElements('\n\t\r'), false);
assert.equal(objectUtils.hasElements('0'), true);
assert.equal(objectUtils.hasElements('teste'), true);
assert.equal(objectUtils.hasElements(NaN), false);
assert.equal(objectUtils.hasElements(undefined), false);
assert.equal(objectUtils.hasElements(function(){return true}), false);

//Testing isEmpty
assert.equal(objectUtils.isEmpty(), true);
assert.equal(objectUtils.isEmpty({}), true);
assert.equal(objectUtils.isEmpty({0 : 'teste'}), false);
assert.equal(objectUtils.isEmpty([]), true);
assert.equal(objectUtils.isEmpty([0,1]), false);
assert.equal(objectUtils.isEmpty(0), true);
assert.equal(objectUtils.isEmpty(''), true);
assert.equal(objectUtils.isEmpty('\n\t\r'), true);
assert.equal(objectUtils.isEmpty('0'), false);
assert.equal(objectUtils.isEmpty('teste'), false);
assert.equal(objectUtils.isEmpty(NaN), true);
assert.equal(objectUtils.isEmpty(undefined), true);
assert.equal(objectUtils.isEmpty(function(){return true}), true);
