import * as React from "react";
import { Theme, WithStyles } from "@material-ui/core";
import { NavigationAction, DateRange } from "../types";
declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "root" | "weekDaysContainer" | "daysContainer">;
interface MonthProps extends WithStyles<typeof styles> {
    value: Date;
    marker: symbol;
    dateRange: DateRange;
    minDate: Date;
    maxDate: Date;
    navState: [boolean, boolean];
    setValue: (date: Date) => void;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.ComponentType<Pick<MonthProps & {
    children?: React.ReactNode;
}, "marker" | "children" | "value" | "dateRange" | "minDate" | "maxDate" | "navState" | "setValue" | "helpers" | "handlers"> & import("@material-ui/core").StyledComponentProps<"root" | "weekDaysContainer" | "daysContainer">>;
export default _default;
