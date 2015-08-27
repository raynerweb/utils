var ObjectUtils = require('./objectUtils');
var assert =  require('assert');


//Testing isUndefined()
assert.equal(ObjectUtils.isUndefined(), true);
assert.equal(ObjectUtils.isUndefined({}), false);
assert.equal(ObjectUtils.isUndefined({0 : 'teste'}), false);
assert.equal(ObjectUtils.isUndefined([]), false);
assert.equal(ObjectUtils.isUndefined([0,1]), false);
assert.equal(ObjectUtils.isUndefined(0), false);
assert.equal(ObjectUtils.isUndefined(''), false);
assert.equal(ObjectUtils.isUndefined('0'), false);
assert.equal(ObjectUtils.isUndefined('teste'), false);
assert.equal(ObjectUtils.isUndefined(NaN), false);
assert.equal(ObjectUtils.isUndefined(undefined), true);
assert.equal(ObjectUtils.isUndefined(function(){return true}), false);


//Testing isNumber
assert.equal(ObjectUtils.isNumber(), false);
assert.equal(ObjectUtils.isNumber({}), false);
assert.equal(ObjectUtils.isNumber({0 : 'teste'}), false);
assert.equal(ObjectUtils.isNumber([]), false);
assert.equal(ObjectUtils.isNumber([0,1]), false);
assert.equal(ObjectUtils.isNumber(0), true);
assert.equal(ObjectUtils.isNumber(''), false);
assert.equal(ObjectUtils.isNumber('0'), false);
assert.equal(ObjectUtils.isNumber('teste'), false);
assert.equal(ObjectUtils.isNumber(NaN), false);
assert.equal(ObjectUtils.isNumber(undefined), false);
assert.equal(ObjectUtils.isNumber(function(){return true}), false);

//Testing isNumeric
assert.equal(ObjectUtils.isNumeric(), false);
assert.equal(ObjectUtils.isNumeric({}), false);
assert.equal(ObjectUtils.isNumeric({0 : 'teste'}), false);
assert.equal(ObjectUtils.isNumeric([]), false);
assert.equal(ObjectUtils.isNumeric([0,1]), false);
assert.equal(ObjectUtils.isNumeric(0), true);
assert.equal(ObjectUtils.isNumeric(''), false);
assert.equal(ObjectUtils.isNumeric('0'), true);
assert.equal(ObjectUtils.isNumeric('teste'), false);
assert.equal(ObjectUtils.isNumeric(NaN), false);
assert.equal(ObjectUtils.isNumeric(undefined), false);
assert.equal(ObjectUtils.isNumeric(function(){return true}), false);

//Testing isZero
assert.equal(ObjectUtils.isZero(), false);
assert.equal(ObjectUtils.isZero({}), false);
assert.equal(ObjectUtils.isZero({0 : 'teste'}), false);
assert.equal(ObjectUtils.isZero([]), false);
assert.equal(ObjectUtils.isZero([0,1]), false);
assert.equal(ObjectUtils.isZero(0), true);
assert.equal(ObjectUtils.isZero(''), false);
assert.equal(ObjectUtils.isZero('0'), false);
assert.equal(ObjectUtils.isZero('teste'), false);
assert.equal(ObjectUtils.isZero(NaN), false);
assert.equal(ObjectUtils.isZero(undefined), false);
assert.equal(ObjectUtils.isZero(function(){return true}), false);

//Testing isEmptyString
assert.equal(ObjectUtils.isEmptyString(), false);
assert.equal(ObjectUtils.isEmptyString({}), false);
assert.equal(ObjectUtils.isEmptyString({0 : 'teste'}), false);
assert.equal(ObjectUtils.isEmptyString([]), false);
assert.equal(ObjectUtils.isEmptyString([0,1]), false);
assert.equal(ObjectUtils.isEmptyString(0), false);
assert.equal(ObjectUtils.isEmptyString(''), true);
assert.equal(ObjectUtils.isEmptyString('\n\t\r'), true);
assert.equal(ObjectUtils.isEmptyString('0'), false);
assert.equal(ObjectUtils.isEmptyString('teste'), false);
assert.equal(ObjectUtils.isEmptyString(NaN), false);
assert.equal(ObjectUtils.isEmptyString(undefined), false);
assert.equal(ObjectUtils.isEmptyString(function(){return true}), false);

//Testing isString
assert.equal(ObjectUtils.isString(), false);
assert.equal(ObjectUtils.isString({}), false);
assert.equal(ObjectUtils.isString({0 : 'teste'}), false);
assert.equal(ObjectUtils.isString([]), false);
assert.equal(ObjectUtils.isString([0,1]), false);
assert.equal(ObjectUtils.isString(0), false);
assert.equal(ObjectUtils.isString(''), true);
assert.equal(ObjectUtils.isString('\n\t\r'), true);
assert.equal(ObjectUtils.isString('0'), true);
assert.equal(ObjectUtils.isString('teste'), true);
assert.equal(ObjectUtils.isString(NaN), false);
assert.equal(ObjectUtils.isString(undefined), false);
assert.equal(ObjectUtils.isString(function(){return true}), false);

//Testing isFunction
assert.equal(ObjectUtils.isFunction(), false);
assert.equal(ObjectUtils.isFunction({}), false);
assert.equal(ObjectUtils.isFunction({0 : 'teste'}), false);
assert.equal(ObjectUtils.isFunction([]), false);
assert.equal(ObjectUtils.isFunction([0,1]), false);
assert.equal(ObjectUtils.isFunction(0), false);
assert.equal(ObjectUtils.isFunction(''), false);
assert.equal(ObjectUtils.isFunction('\n\t\r'), false);
assert.equal(ObjectUtils.isFunction('0'), false);
assert.equal(ObjectUtils.isFunction('teste'), false);
assert.equal(ObjectUtils.isFunction(NaN), false);
assert.equal(ObjectUtils.isFunction(undefined), false);
assert.equal(ObjectUtils.isFunction(function(){return true}), true);

//Testing isObjectOrArray
assert.equal(ObjectUtils.isObjectOrArray(), false);
assert.equal(ObjectUtils.isObjectOrArray({}), true);
assert.equal(ObjectUtils.isObjectOrArray({0 : 'teste'}), true);
assert.equal(ObjectUtils.isObjectOrArray([]), true);
assert.equal(ObjectUtils.isObjectOrArray([0,1]), true);
assert.equal(ObjectUtils.isObjectOrArray(0), false);
assert.equal(ObjectUtils.isObjectOrArray(''), false);
assert.equal(ObjectUtils.isObjectOrArray('\n\t\r'), false);
assert.equal(ObjectUtils.isObjectOrArray('0'), false);
assert.equal(ObjectUtils.isObjectOrArray('teste'), false);
assert.equal(ObjectUtils.isObjectOrArray(NaN), false);
assert.equal(ObjectUtils.isObjectOrArray(undefined), false);
assert.equal(ObjectUtils.isObjectOrArray(function(){return true}), false);

//Testing isArray
assert.equal(ObjectUtils.isArray(), false);
assert.equal(ObjectUtils.isArray({}), false);
assert.equal(ObjectUtils.isArray({0 : 'teste'}), false);
assert.equal(ObjectUtils.isArray([]), true);
assert.equal(ObjectUtils.isArray([0,1]), true);
assert.equal(ObjectUtils.isArray(0), false);
assert.equal(ObjectUtils.isArray(''), false);
assert.equal(ObjectUtils.isArray('\n\t\r'), false);
assert.equal(ObjectUtils.isArray('0'), false);
assert.equal(ObjectUtils.isArray('teste'), false);
assert.equal(ObjectUtils.isArray(NaN), false);
assert.equal(ObjectUtils.isArray(undefined), false);
assert.equal(ObjectUtils.isArray(function(){return true}), false);

//Testing isObject
assert.equal(ObjectUtils.isObject(), false);
assert.equal(ObjectUtils.isObject({}), true);
assert.equal(ObjectUtils.isObject({0 : 'teste'}), true);
assert.equal(ObjectUtils.isObject([]), false);
assert.equal(ObjectUtils.isObject([0,1]), false);
assert.equal(ObjectUtils.isObject(0), false);
assert.equal(ObjectUtils.isObject(''), false);
assert.equal(ObjectUtils.isObject('\n\t\r'), false);
assert.equal(ObjectUtils.isObject('0'), false);
assert.equal(ObjectUtils.isObject('teste'), false);
assert.equal(ObjectUtils.isObject(NaN), false);
assert.equal(ObjectUtils.isObject(undefined), false);
assert.equal(ObjectUtils.isObject(function(){return true}), false);

//Testing hasElements
assert.equal(ObjectUtils.hasElements(), false);
assert.equal(ObjectUtils.hasElements({}), false);
assert.equal(ObjectUtils.hasElements({0 : 'teste'}), true);
assert.equal(ObjectUtils.hasElements([]), false);
assert.equal(ObjectUtils.hasElements([0,1]), true);
assert.equal(ObjectUtils.hasElements(0), false);
assert.equal(ObjectUtils.hasElements(''), false);
assert.equal(ObjectUtils.hasElements('\n\t\r'), false);
assert.equal(ObjectUtils.hasElements('0'), true);
assert.equal(ObjectUtils.hasElements('teste'), true);
assert.equal(ObjectUtils.hasElements(NaN), false);
assert.equal(ObjectUtils.hasElements(undefined), false);
assert.equal(ObjectUtils.hasElements(function(){return true}), false);

//Testing isEmpty
assert.equal(ObjectUtils.isEmpty(), true);
assert.equal(ObjectUtils.isEmpty({}), true);
assert.equal(ObjectUtils.isEmpty({0 : 'teste'}), false);
assert.equal(ObjectUtils.isEmpty([]), true);
assert.equal(ObjectUtils.isEmpty([0,1]), false);
assert.equal(ObjectUtils.isEmpty(0), true);
assert.equal(ObjectUtils.isEmpty(''), true);
assert.equal(ObjectUtils.isEmpty('\n\t\r'), true);
assert.equal(ObjectUtils.isEmpty('0'), false);
assert.equal(ObjectUtils.isEmpty('teste'), false);
assert.equal(ObjectUtils.isEmpty(NaN), true);
assert.equal(ObjectUtils.isEmpty(undefined), true);
assert.equal(ObjectUtils.isEmpty(function(){return true}), true);
