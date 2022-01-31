var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var First = /** @class */ (function () {
    function First(name) {
        this.name = name;
    }
    return First;
}());
var Second = /** @class */ (function (_super) {
    __extends(Second, _super);
    function Second(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Second.prototype.printName = function () {
        console.log('My name is ' + this.name);
    };
    Second.prototype.setName = function (name) {
        this.name = name.toString();
    };
    return Second;
}(First));
var c = new Second('Kate');
c.printName();
c.setName('aaa');
c.printName();
