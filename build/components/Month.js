"use strict";
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
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var date_fns_1 = require("date-fns");
var utils_1 = require("../utils");
var Header_1 = __importDefault(require("./Header"));
var Day_1 = __importDefault(require("./Day"));
var types_1 = require("../types");
var WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var styles = function (theme) {
    return (0, core_1.createStyles)({
        root: {
            width: 290
        },
        weekDaysContainer: {
            marginTop: 10,
            paddingLeft: 30,
            paddingRight: 30
        },
        daysContainer: {
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 15,
            marginBottom: 20
        }
    });
};
var Month = function (props) {
    var classes = props.classes, helpers = props.helpers, handlers = props.handlers, date = props.value, dateRange = props.dateRange, marker = props.marker, setDate = props.setValue, minDate = props.minDate, maxDate = props.maxDate;
    var _a = props.navState, back = _a[0], forward = _a[1];
    return (React.createElement(core_1.Paper, { square: true, elevation: 0, className: classes.root },
        React.createElement(core_1.Grid, { container: true },
            React.createElement(Header_1.default, { date: date, setDate: setDate, nextDisabled: !forward, prevDisabled: !back, onClickPrevious: function () {
                    return handlers.onMonthNavigate(marker, types_1.NavigationAction.Previous);
                }, onClickNext: function () { return handlers.onMonthNavigate(marker, types_1.NavigationAction.Next); } }),
            React.createElement(core_1.Grid, { item: true, container: true, direction: "row", justifyContent: "space-between", className: classes.weekDaysContainer }, WEEK_DAYS.map(function (day) { return (React.createElement(core_1.Typography, { color: "textSecondary", key: day, variant: "caption" }, day)); })),
            React.createElement(core_1.Grid, { item: true, container: true, direction: "column", justifyContent: "space-between", className: classes.daysContainer }, (0, utils_1.chunks)((0, utils_1.getDaysInMonth)(date), 7).map(function (week, idx) { return (React.createElement(core_1.Grid, { key: idx, container: true, direction: "row", justifyContent: "center" }, week.map(function (day) {
                var isStart = (0, utils_1.isStartOfRange)(dateRange, day);
                var isEnd = (0, utils_1.isEndOfRange)(dateRange, day);
                var isRangeOneDay = (0, utils_1.isRangeSameDay)(dateRange);
                var highlighted = (0, utils_1.inDateRange)(dateRange, day) || helpers.inHoverRange(day);
                return (React.createElement(Day_1.default, { key: (0, date_fns_1.format)(day, "mm-dd-yyyy"), filled: isStart || isEnd, outlined: (0, date_fns_1.isToday)(day), highlighted: highlighted && !isRangeOneDay, disabled: !(0, date_fns_1.isSameMonth)(date, day) ||
                        !(0, date_fns_1.isWithinInterval)(day, {
                            start: minDate,
                            end: maxDate
                        }), startOfRange: isStart && !isRangeOneDay, endOfRange: isEnd && !isRangeOneDay, onClick: function () { return handlers.onDayClick(day); }, onHover: function () { return handlers.onDayHover(day); }, value: (0, date_fns_1.getDate)(day) }));
            }))); })))));
};
exports.default = (0, core_1.withStyles)(styles)(Month);
//# sourceMappingURL=Month.js.map