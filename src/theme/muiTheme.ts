import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

const primaryMainColor = "#1e88e5";
const primaryLightColor = "#90caf9";
const primaryDarkColor = "#1976d2";
const primaryTextColor = "#fff";
const primaryTransparentColor = "rgba(162, 210, 255, 0.3)";

const secondaryMainColor = "#bebebe";
const secondaryLightColor = "#cfcfcf";
const secondaryDarkColor = "#404040";
const secondaryTextColor = "#000";

const errorColor = red[400];

const theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true
        }
    },
    overrides: {
        MuiList: {
            padding: {
                paddingTop: "12px",
                paddingBottom: "12px"
            }
        },
    },
    palette: {
        primary: {
            light: primaryLightColor,
            main: primaryMainColor,
            dark: primaryDarkColor,
            contrastText: primaryTextColor
        },
        secondary: {
            light: secondaryLightColor,
            main: secondaryMainColor,
            dark: secondaryDarkColor,
            contrastText: secondaryTextColor
        },
        action: {
            hover: primaryTransparentColor
        },
        error: {
            main: errorColor
        }
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        subtitle1: {
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "16px",
            color: secondaryDarkColor,
            textTransform: "uppercase"
        },
        h5: {
            fontWeight: 500
        }
    }
});

export default theme;