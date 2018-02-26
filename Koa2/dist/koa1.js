'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');

var indent = function indent(n) {
    return Array(n).join('&nbsp');
};

var mid1 = function mid1() {
    return (/*#__PURE__*/_regenerator2.default.mark(function _callee(next) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            this.body = '<h3>请求 => 第一层中间件</h3>';
                            _context.next = 3;
                            return next;

                        case 3:
                            this.body += '<h3>响应 <= 第一层中间件</h3>';

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        })
    );
};

var mid2 = function mid2() {
    return (/*#__PURE__*/_regenerator2.default.mark(function _callee2(next) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            this.body += '<h3>请求' + indent(4) + '=> 第二层中间件</h3>';
                            _context2.next = 3;
                            return next;

                        case 3:
                            this.body += '<h3>响应' + indent(4) + '<= 第二层中间件</h3>';

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        })
    );
};

var mid3 = function mid3() {
    return (/*#__PURE__*/_regenerator2.default.mark(function _callee3(next) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            this.body += '<h3>请求' + indent(8) + '=> 第三层中间件</h3>';
                            _context3.next = 3;
                            return next;

                        case 3:
                            this.body += '<h3>响应' + indent(8) + '<= 第三层中间件</h3>';

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        })
    );
};

app.use(logger());
app.use(mid1());
app.use(mid2());
app.use(mid3());

app.use( /*#__PURE__*/_regenerator2.default.mark(function _callee4(next) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    this.body += '<p style="color: #f60">' + indent(12) + 'koa核心处理业务</p>';

                case 1:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _callee4, this);
}));

app.listen(2111);
//# sourceMappingURL=koa1.js.map