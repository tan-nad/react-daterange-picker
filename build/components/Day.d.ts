import * as React from "react";
import { Theme, WithStyles } from "@material-ui/core";
interface DayProps extends WithStyles<typeof styles> {
    filled?: boolean;
    outlined?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    startOfRange?: boolean;
    endOfRange?: boolean;
    onClick?: () => void;
    onHover?: () => void;
    value: number | string;
}
declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "button" | "filled" | "outlined" | "leftBorderRadius" | "rightBorderRadius" | "buttonContainer" | "buttonText" | "highlighted" | "contrast">;
declare const _default: React.ComponentType<Pick<DayProps & {
    children?: React.ReactNode;
}, "filled" | "disabled" | "children" | "onClick" | "value" | "outlined" | "highlighted" | "startOfRange" | "endOfRange" | "onHover"> & import("@material-ui/core").StyledComponentProps<"button" | "filled" | "outlined" | "leftBorderRadius" | "rightBorderRadius" | "buttonContainer" | "buttonText" | "highlighted" | "contrast">>;
export default _default;
