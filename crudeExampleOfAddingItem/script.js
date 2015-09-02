var product,
    validator;

validator = {
        ifUndefined: function(obj, name) {
            if (typeof(obj) === 'undefined') {
                throw new Error(name + ' cannot be undefined');
            };
        },
        ifString: function(obj, name) {
            if (typeof(obj) !== 'string') {
                throw new Error(name + ' must be a string');
            };
        },
        ifStringIsEmpty: function(str, name) {
            if (str.length < 1) {
                throw new Error(name + ' string must not be empty');
            };
        },
        ifInLenghtRange: function(str, min, max, name) {
            var len = str.length;
            if (len < min || len > max) {
                throw new Error(name + ' must be between ' + min + ' and ' + max + ' characters long.');
            };
        },
        ifOnlyNumbersInString: function(str, name) {
            var reg = /^\d+$/;
            var key = reg.test(str);

            if (!key) {
                throw new Error(name + ' must contain only numbers');
            };

        },
        ifNumber: function(obj, name) {
            if (typeof(obj) !== 'number') {
                throw new Error(name + ' must be a number');
            };
        },
        ifNoArguments: function(input, name) {
            if (input.length < 1) {
                throw new Error('Must add arguments when using ' + name);
            };
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
                validator.ifUndefined(str);
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
                validator.ifUndefined(str);
                validator.ifString(str);
                validator.ifStringIsEmpty(str);
                validator.ifInLenghtRange(str, 2, 40, 'Name of the product');

                this._name = str;
            }
        });


        return product;
    }());