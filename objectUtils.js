var ObjectUtils = {
    // isEmpty : function(object){
    //     if (this.isUndefined(object)){
    //         console.log('isUndefined');
    //         return true;
    //     }
    //     if (this.isEmptyString(object)){
    //         console.log('isEmptyString');
    //         return true;
    //     }
    //     if (this.isNumber(object)){
    //         console.log('isNumber');
    //         return object == 0 || object <=0;
    //     }
    //     if (this.isArray(object)){
    //         console.log('isArray');
    //         return !this.hasElements(object);
    //     }
    //     if (this.isObject(object)){
    //         console.log('isObject');
    //         return true;
    //     }
    //     if (this.isFunction(object)){
    //         console.log('isFunction');
    //         return true;
    //     }
    // },
    isUndefined : function(object){
        return object == undefined;
    },
    isNumber : function(object) {
        if (this.isUndefined(object)){
            return false;
        }
        return typeof object == 'number' && !isNaN(object);
    },
    isNumeric : function(object){
        if (this.isUndefined(object)){
            return false;
        }
        return !isNaN(parseInt(object, 10));
    },
    isZero : function(object){
        return this.isNumber(object) && object == 0;
    },
    isEmptyString : function(object){
        return this.isString(object) && "" == object.trim();
    },
    isString : function(object){
        if (this.isUndefined(object)){
            return false;
        }
        return typeof object == "string";
    },
    isFunction : function(object){
        if (this.isUndefined(object)){
            return false;
        }
        return typeof object == "function";
    },
    isObjectOrArray : function(object){
        if (this.isUndefined(object)){
            return false;
        }
        return typeof object == 'object';
    },
    // hasElements : function(object){
    //     return this.isObjectOrArray(object) && object.length > 0;
    // },
    isArray : function(object){
        return this.isObjectOrArray(object) && JSON.stringify(object).indexOf('[') > -1;
    },
    isObject : function(object){
        return this.isObjectOrArray(object) && JSON.stringify(object).indexOf('{') > -1;
    }
};
