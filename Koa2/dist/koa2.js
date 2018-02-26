'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');
var convert = require('koa-convert');
var indent = function indent(n) {
    return new Array(n).join('&nbsp');
};

var mid1 = function mid1() {
    return function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            undefined.body = '<h3>\u8BF7\u6C42 => \u7B2C\u4E00\u5C42\u4E2D\u95F4\u4EF6</h3>';
                            _context.next = 3;
                            return next();

                        case 3:
                            undefined.body += '<h3>\u54CD\u5E94 <= \u7B2C\u4E00\u5C42\u4E2D\u95F4\u4EF6</h3>';

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};

var mid2 = function mid2() {
    return function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            undefined.body += '<h3>\u8BF7\u6C42' + indent(4) + '=> \u7B2C\u4E8C\u5C42\u4E2D\u95F4\u4EF6</h3>';
                            _context2.next = 3;
                            return next();

                        case 3:
                            undefined.body += '<h3>\u54CD\u5E94' + indent(4) + '<= \u7B2C\u4E8C\u5C42\u4E2D\u95F4\u4EF6</h3>';

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var mid3 = function mid3() {
    return function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            undefined.body += '<h3>\u8BF7\u6C42' + indent(8) + '=> \u7B2C\u4E09\u5C42\u4E2D\u95F4\u4EF6</h3>';
                            _context3.next = 3;
                            return next();

                        case 3:
                            undefined.body += '<h3>\u54CD\u5E94\'' + indent(8) + '<= \u7B2C\u4E09\u5C42\u4E2D\u95F4\u4EF6</h3>';

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();
};

// app.use(conver(logger()))
app.use(mid1());
app.use(mid2());
app.use(mid3());

// app.use(async(ctx,next) =>{
//     this.body +=`<p style="color: #f60">${indent(12)}koa核心处理业务</p>`
// })

app.listen(2222);
//# sourceMappingURL=koa2.js.map