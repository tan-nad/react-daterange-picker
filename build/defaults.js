"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRanges = void 0;
var date_fns_1 = require("date-fns");
var getDefaultRanges = function (date) { return [
    {
        label: "Today",
        startDate: date,
        endDate: date
    },
    {
        label: "Yesterday",
        startDate: (0, date_fns_1.addDays)(date, -1),
        endDate: (0, date_fns_1.addDays)(date, -1)
    },
    {
        label: "This Week",
        startDate: (0, date_fns_1.startOfWeek)(date),
        endDate: (0, date_fns_1.endOfWeek)(date)
    },
    {
        label: "Last Week",
        startDate: (0, date_fns_1.startOfWeek)((0, date_fns_1.addWeeks)(date, -1)),
        endDate: (0, date_fns_1.endOfWeek)((0, date_fns_1.addWeeks)(date, -1))
    },
    {
        label: "Last 7 Days",
        startDate: (0, date_fns_1.addWeeks)(date, -1),
        endDate: date
    },
    {
        label: "This Month",
        startDate: (0, date_fns_1.startOfMonth)(date),
        endDate: (0, date_fns_1.endOfMonth)(date)
    },
    {
        label: "Last Month",
        startDate: (0, date_fns_1.startOfMonth)((0, date_fns_1.addMonths)(date, -1)),
        endDate: (0, date_fns_1.endOfMonth)((0, date_fns_1.addMonths)(date, -1))
    }
]; };
exports.defaultRanges = getDefaultRanges(new Date());
//# sourceMappingURL=defaults.js.map