'use strict';

var luck = {
    id: 2,
    say: function say() {
        setTimeout(function () {
            console.log('id:', this.id);
        }, 50);
    },
    sayWithThis: function sayWithThis() {
        var that = this;

        setTimeout(function () {
            console.log('this id:', that.id);
        }, 100);
    },
    sayWithArrow: function sayWithArrow() {
        var _this = this;

        setTimeout(function () {
            console.log('arrow id:', _this.id);
        }, 500);
    },
    sayWithGlobelArrow: function sayWithGlobelArrow() {
        setTimeout(function () {
            console.log('globel arrow id:', undefined.id);
        }, 1500);
    }
};

luck.say();
luck.sayWithThis();
luck.sayWithArrow();
luck.sayWithGlobelArrow();
//# sourceMappingURL=arrow.js.map