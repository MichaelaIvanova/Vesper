//TODO make it an module

var product,
    food,
    vehicle,
    clothes,
    appliance,
    validator;

validator = {
        ifUndefined: function(obj, name) {
            if (typeof(obj) === 'undefined') {
                throw new Error(name + ' cannot be undefined');
            }
        },
        ifString: function(obj, name) {
            if (typeof(obj) !== 'string') {
                throw new Error(name + ' must be a string');
            }
        },
        ifStringIsEmpty: function(str, name) {
            if (str.length < 1) {
                throw new Error(name + ' string must not be empty');
            }
        },
        ifInLenghtRange: function(str, min, max, name) {
            var len = str.length;
            if (len < min || len > max) {
                throw new Error(name + ' must be between ' + min + ' and ' + max + ' characters long.');
            }
        },
        ifOnlyNumbersInString: function(str, name) {
            var reg = /^\d+$/;
            var key = reg.test(str);

            if (!key) {
                throw new Error(name + ' must contain only numbers');
            }

        },
        ifNumber: function(obj, name) {
            if (typeof(obj) !== 'number') {
                throw new Error(name + ' must be a number');
            }
        },
         validatePositiveNumber: function (val, name) {
        name = name || 'Value';
        this.ifUndefined(val, name);
        this.ifNumber(val, name);
             if (val <= 0) {
            throw new Error(name + ' must be positive number');
             }
        },
        ifNoArguments: function(input, name) {
            if (input.length < 1) {
                throw new Error('Must add arguments when using ' + name);
            }
        }
    };    

product = (function() {
        var product = Object.create({}),
            index = 0; 

        Object.defineProperty(product, 'init', {
            value: function(description, name, imgURL, price) {
                this.id = ++index;
                this.description = description;
                this.name = name;
                this.imgURL = imgURL;
                this.price = price;

                return this;
            }
        });

        Object.defineProperty(product, 'description', {
            get: function() {
                return this._description;
            },
            set: function(str) {
                validator.ifUndefined(str,'description');
                validator.ifString(str);
                validator.ifStringIsEmpty(str);

                this._description = str;
            }
        });

        Object.defineProperty(product, 'name', {
            get: function() {
                return this._name;
            },
            set: function(str) {
                validator.ifUndefined(str,'name');
                validator.ifString(str);
                validator.ifStringIsEmpty(str);
                validator.ifInLenghtRange(str, 2, 40, 'Name of the product');

                this._name = str;
            }
        });
        Object.defineProperty(product, 'price', {
             get: function() {
            return this._price;
             },
             set: function(value) {
                 validator.ifUndefined(value,'Price');
                 validator.validatePositiveNumber(value,'Price');
            this._price = value;
            }
         });

        //TODO url need valdiation


        return product;
    }());


food = (function  (parent) {
    var food = Object.create(parent);

    Object.defineProperty(food,'init',{
        value: function  (description,name,imgURL,price,expirationDate, calories) {
            parent.init.call(this,description,name,imgURL,price);
            this.expirationDate = expirationDate;
            this.calories = calories;

            return  this;
        }
    });
    Object.defineProperty(food, 'calories', {
        get: function() {
            return this._calories;
        },
        set: function(value) {
            validator.ifUndefined(value,'Calories');
            validator.validatePositiveNumber(value,'Calories');
            this._calories = value;
        }
    });
    
    return food;

}(product));
 vehicle = (function  (parent) {
    var vehicle = Object.create(parent);

    Object.defineProperty(vehicle,'init',{
        value: function  (description,name,imgURL,price,mileage,horsePower,manufacturer) {
            parent.init.call(this,description,name,imgURL,price);
            this.mileage = mileage;
            this.horsePower = horsePower;
            this.manufacturer = manufacturer;

            return this;
        }
    });
    Object.defineProperty(vehicle, 'mileage', {
        get: function() {
            return this._mileage;
        },
        set: function(value) {
            validator.ifUndefined(value,'mileage');
            validator.validatePositiveNumber(value,'mileage');
            this._mileage = value;
        }
    });
    Object.defineProperty(vehicle, 'horsePower', {
        get: function() {
            return this._horsePower;
        },
        set: function(value) {
            validator.ifUndefined(value,'Horse power');
            validator.validatePositiveNumber(value,'Horse power');
            this._horsePower = value;
        }
    });
    Object.defineProperty(vehicle, 'manufacturer', {
        get: function() {
            return this._manufacturer;
        },
        set: function(str) {
            validator.ifUndefined(str,'manufacturer');
            validator.ifString(str);
            validator.ifStringIsEmpty(str);
            validator.ifInLenghtRange(str, 2, 40, 'manufacturer');

            this._manufacturer = str;
        }
    });

    return vehicle;

}(product));

clothes = (function  (parent) {
    var clothes = Object.create(parent);

    Object.defineProperty(clothes,'init',{
        value: function  (description,name,imgURL,price,type, size) {
            parent.init.call(this,description,name,imgURL,price);
            this.type = type;
            this.size = size;

            return  this;
        }
    });
    Object.defineProperty(clothes, 'type', {
        get: function() {
            return this._type;
        },
        set: function(value) {
            validator.ifUndefined(value,'type');
            this._type = value;
        }
    });
    Object.defineProperty(clothes, 'size', {
        get: function() {
            return this._size;
        },
        set: function(value) {
            validator.ifUndefined(value,'size');
            this._size = value;
        }
    });


    return clothes;

}(product));

appliance = (function  (parent) {
    var appliance = Object.create(parent);

    Object.defineProperty(appliance,'init',{
        value: function  (description,name,imgURL,price,manufacturer, condition) {
            parent.init.call(this,description,name,imgURL,price);
            this.manufacturer = manufacturer;
            this.condition= condition;

            return  this;
        }
    });
    Object.defineProperty(appliance, 'manufacturer', {
        get: function() {
            return this._manufacturer;
        },
        set: function(str) {
            validator.ifUndefined(str,'manufacturer');
            validator.ifString(str);
            validator.ifStringIsEmpty(str);
            validator.ifInLenghtRange(str, 2, 40, 'manufacturer');

            this._manufacturer = str;
        }
    });
    Object.defineProperty(appliance, 'condition', {
        get: function() {
            return this._condition;
        },
        set: function(value) {
            validator.ifUndefined(value,'condition');
            this._condition = value;
        }
    });


    return appliance;

}(product));

