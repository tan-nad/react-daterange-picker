import React from "react";
import { WithStyles, Theme } from "@material-ui/core";
import { DateRange, DefinedRange, Setter, NavigationAction } from "../types";
declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "header" | "divider" | "headerItem">;
interface MenuProps extends WithStyles<typeof styles> {
    dateRange: DateRange;
    ranges: DefinedRange[];
    minDate: Date;
    maxDate: Date;
    firstMonth: Date;
    secondMonth: Date;
    setFirstMonth: Setter<Date>;
    setSecondMonth: Setter<Date>;
    setDateRange: Setter<DateRange>;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.ComponentType<Pick<MenuProps & {
    children?: React.ReactNode;
}, "children" | "dateRange" | "minDate" | "maxDate" | "helpers" | "handlers" | "ranges" | "firstMonth" | "secondMonth" | "setFirstMonth" | "setSecondMonth" | "setDateRange"> & import("@material-ui/core").StyledComponentProps<"header" | "divider" | "headerItem">>;
export default _default;
