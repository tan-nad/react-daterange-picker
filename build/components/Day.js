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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var utils_1 = require("../utils");
var styles = function (theme) {
    return (0, core_1.createStyles)({
        leftBorderRadius: {
            borderRadius: "50% 0 0 50%"
        },
        rightBorderRadius: {
            borderRadius: "0 50% 50% 0"
        },
        buttonContainer: {
            display: "flex"
        },
        button: {
            height: 36,
            width: 36,
            padding: 0
        },
        buttonText: {
            lineHeight: 1.6
        },
        outlined: {
            border: "1px solid " + theme.palette.primary.dark
        },
        filled: {
            "&:hover": {
                backgroundColor: theme.palette.primary.dark
            },
            backgroundColor: theme.palette.primary.dark
        },
        highlighted: {
            backgroundColor: theme.palette.action.hover
        },
        contrast: {
            color: theme.palette.primary.contrastText
        }
    });
};
var Day = function (props) {
    var classes = props.classes;
    return (React.createElement("div", { className: (0, utils_1.combine)(classes.buttonContainer, props.startOfRange && classes.leftBorderRadius, props.endOfRange && classes.rightBorderRadius, !props.disabled && props.highlighted && classes.highlighted) },
        React.createElement(core_1.IconButton, { className: (0, utils_1.combine)(classes.button, !props.disabled && props.outlined && classes.outlined, !props.disabled && props.filled && classes.filled), disabled: props.disabled, onClick: props.onClick, onMouseOver: props.onHover },
            React.createElement(core_1.Typography, { color: !props.disabled ? "initial" : "textSecondary", className: (0, utils_1.combine)(classes.buttonText, !props.disabled && props.filled && classes.contrast), variant: "body2" }, props.value))));
};
exports.default = (0, core_1.withStyles)(styles)(Day);
//# sourceMappingURL=Day.js.map