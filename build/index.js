"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = exports.MARKERS = void 0;
var React = __importStar(require("react"));
var date_fns_1 = require("date-fns");
var Menu_1 = __importDefault(require("./components/Menu"));
var defaults_1 = require("./defaults");
var utils_1 = require("./utils");
exports.MARKERS = {
    FIRST_MONTH: Symbol("firstMonth"),
    SECOND_MONTH: Symbol("secondMonth")
};
var getValidatedMonths = function (range, minDate, maxDate) {
    var startDate = range.startDate, endDate = range.endDate;
    if (startDate && endDate) {
        var newStart = (0, date_fns_1.max)([startDate, minDate]);
        var newEnd = (0, date_fns_1.min)([endDate, maxDate]);
        return [newStart, (0, date_fns_1.isSameMonth)(newStart, newEnd) ? (0, date_fns_1.addMonths)(newStart, 1) : newEnd];
    }
    else {
        return [startDate, endDate];
    }
};
var DateRangePickerImpl = function (props) {
    var today = new Date();
    var open = props.open, onChange = props.onChange, initialDateRange = props.initialDateRange, minDate = props.minDate, maxDate = props.maxDate, _a = props.definedRanges, definedRanges = _a === void 0 ? defaults_1.defaultRanges : _a;
    var minDateValid = (0, utils_1.parseOptionalDate)(minDate, (0, date_fns_1.addYears)(today, -10));
    var maxDateValid = (0, utils_1.parseOptionalDate)(maxDate, (0, date_fns_1.addYears)(today, 10));
    var _b = getValidatedMonths(initialDateRange || {}, minDateValid, maxDateValid), intialFirstMonth = _b[0], initialSecondMonth = _b[1];
    // console.log("rendering DateRangePicker");
    var _c = React.useState(__assign({}, initialDateRange)), dateRange = _c[0], setDateRange = _c[1];
    var _d = React.useState(), hoverDay = _d[0], setHoverDay = _d[1];
    var _e = React.useState(intialFirstMonth || (0, date_fns_1.addMonths)(today, -1)), firstMonth = _e[0], setFirstMonth = _e[1];
    var _f = React.useState(initialSecondMonth || today), secondMonth = _f[0], setSecondMonth = _f[1];
    var startDate = dateRange.startDate, endDate = dateRange.endDate;
    // handlers
    var setFirstMonthValidated = function (date) {
        if ((0, date_fns_1.isBefore)(date, secondMonth)) {
            setFirstMonth(date);
        }
    };
    var setSecondMonthValidated = function (date) {
        if ((0, date_fns_1.isAfter)(date, firstMonth)) {
            setSecondMonth(date);
        }
    };
    var setDateRangeValidated = function (range) {
        var newStart = range.startDate, newEnd = range.endDate;
        if (newStart && newEnd) {
            range.startDate = newStart = (0, date_fns_1.max)([newStart, minDateValid]);
            range.endDate = newEnd = (0, date_fns_1.min)([newEnd, maxDateValid]);
            setDateRange(range);
            onChange(range);
            setFirstMonth(newStart);
            setSecondMonth((0, date_fns_1.isSameMonth)(newStart, newEnd) ? (0, date_fns_1.addMonths)(newStart, 1) : newEnd);
        }
    };
    var onDayClick = function (day) {
        if (startDate && !endDate && !(0, date_fns_1.isBefore)(day, startDate)) {
            var newRange = { startDate: startDate, endDate: day };
            onChange(newRange);
            setDateRange(newRange);
        }
        else {
            setDateRange({ startDate: day, endDate: undefined });
        }
        setHoverDay(day);
    };
    var onMonthNavigate = function (marker, action) {
        if (marker == exports.MARKERS.FIRST_MONTH) {
            var firstNew = (0, date_fns_1.addMonths)(firstMonth, action);
            if ((0, date_fns_1.isBefore)(firstNew, secondMonth))
                setFirstMonth(firstNew);
        }
        else {
            var secondNew = (0, date_fns_1.addMonths)(secondMonth, action);
            if ((0, date_fns_1.isBefore)(firstMonth, secondNew))
                setSecondMonth(secondNew);
        }
    };
    var onDayHover = function (date) {
        if (startDate && !endDate) {
            if (!hoverDay || !(0, date_fns_1.isSameDay)(date, hoverDay)) {
                setHoverDay(date);
            }
        }
    };
    // helpers
    var inHoverRange = function (day) {
        return (startDate &&
            !endDate &&
            hoverDay &&
            (0, date_fns_1.isAfter)(hoverDay, startDate) &&
            (0, date_fns_1.isWithinInterval)(day, {
                start: startDate,
                end: hoverDay
            }));
    };
    var helpers = {
        inHoverRange: inHoverRange
    };
    var handlers = {
        onDayClick: onDayClick,
        onDayHover: onDayHover,
        onMonthNavigate: onMonthNavigate
    };
    return open ? (React.createElement(Menu_1.default, { dateRange: dateRange, minDate: minDateValid, maxDate: maxDateValid, ranges: definedRanges, firstMonth: firstMonth, secondMonth: secondMonth, setFirstMonth: setFirstMonthValidated, setSecondMonth: setSecondMonthValidated, setDateRange: setDateRangeValidated, helpers: helpers, handlers: handlers })) : null;
};
exports.DateRangePicker = DateRangePickerImpl;
//# sourceMappingURL=index.js.map