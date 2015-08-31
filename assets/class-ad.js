
var  ad = (function () {

    var ad = Object.create({});

    Object.defineProperty(ad,'init',{
        value:function(title, description){
            this.title = title;
            this.description = description;
            return this;
        }
    });

    Object.defineProperty(ad,'category',{
        get: function () {
            return this._description;
        },
        set: function (value) {

            //validateStringEvr(value);
            this._description = value;
        }

    });
    return ad;
}());


