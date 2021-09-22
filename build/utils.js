"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptionalDate = exports.isRangeSameDay = exports.inDateRange = exports.isEndOfRange = exports.isStartOfRange = exports.getDaysInMonth = exports.combine = exports.chunks = exports.identity = void 0;
var date_fns_1 = require("date-fns");
var identity = function (x) { return x; };
exports.identity = identity;
var chunks = function (array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, function (v, i) {
        return array.slice(i * size, i * size + size);
    });
};
exports.chunks = chunks;
var combine = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(exports.identity).join(" ");
};
exports.combine = combine;
// Date
var getDaysInMonth = function (date) {
    var startWeek = (0, date_fns_1.startOfWeek)((0, date_fns_1.startOfMonth)(date));
    var endWeek = (0, date_fns_1.endOfWeek)((0, date_fns_1.endOfMonth)(date));
    var days = [];
    for (var curr = startWeek; (0, date_fns_1.isBefore)(curr, endWeek);) {
        days.push(curr);
        curr = (0, date_fns_1.addDays)(curr, 1);
    }
    return days;
};
exports.getDaysInMonth = getDaysInMonth;
var isStartOfRange = function (_a, day) {
    var startDate = _a.startDate;
    return (startDate && (0, date_fns_1.isSameDay)(day, startDate));
};
exports.isStartOfRange = isStartOfRange;
var isEndOfRange = function (_a, day) {
    var endDate = _a.endDate;
    return (endDate && (0, date_fns_1.isSameDay)(day, endDate));
};
exports.isEndOfRange = isEndOfRange;
var inDateRange = function (_a, day) {
    var startDate = _a.startDate, endDate = _a.endDate;
    return (startDate &&
        endDate &&
        ((0, date_fns_1.isWithinInterval)(day, {
            start: startDate,
            end: endDate
        }) ||
            (0, date_fns_1.isSameDay)(day, startDate) ||
            (0, date_fns_1.isSameDay)(day, endDate)));
};
exports.inDateRange = inDateRange;
var isRangeSameDay = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate;
    if (startDate && endDate) {
        return (0, date_fns_1.isSameDay)(startDate, endDate);
    }
    return false;
};
exports.isRangeSameDay = isRangeSameDay;
var parseOptionalDate = function (date, defaultValue) {
    if (date instanceof Date) {
        var parsed = (0, date_fns_1.toDate)(date);
        if ((0, date_fns_1.isValid)(parsed))
            return parsed;
    }
    if (date instanceof String) {
        var parsed = (0, date_fns_1.parseISO)(date);
        if ((0, date_fns_1.isValid)(parsed))
            return parsed;
    }
    return defaultValue;
};
exports.parseOptionalDate = parseOptionalDate;
//# sourceMappingURL=utils.js.map