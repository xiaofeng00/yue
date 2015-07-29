var helper = {}
/*
HELP类的StringBuilder子类
append/clear/length/isEmpty/toString
*/
helper.strBuilder = function() {
    this._buffers = [];
    this._length = 0;

    this._splitChar = arguments.length > 0 ? arguments[arguments.length - 1] : '';
    if (arguments.length > 0) {
        for (var i = 0, iLen = arguments.length - 1; i < iLen; i++) {
            this.Append(arguments[i]);
        }
    }
};

helper.strBuilder.prototype.append = function(str) {
    this._length += str.length;
    this._buffers[this._buffers.length] = str;
};

helper.strBuilder.prototype.toString = function() {
    if (arguments.length == 1) {
        return this._buffers.join(arguments[1]);
    } else {
        return this._buffers.join(this._splitChar);
    }
};

helper.strBuilder.prototype.length = function() {
    if (this._splitChar.length > 0 && (!this.IsEmpty())) {
        return this._length + (this._splitChar.length * (this._buffers.length - 1));
    } else {
        return this._length;
    }
};

helper.strBuilder.prototype.isEmpty = function() {
    return this._buffers.length <= 0;
};

helper.strBuilder.prototype.clear = function() {
    this._buffers = [];
    this._length = 0;
};



var $$ = function(id) {
    var e = document.getElementById(id);
    return helper.element.attachExt(e);
};

function debug(msg){
    if(window.console != undefined){
        console.log(msg);
    }
}