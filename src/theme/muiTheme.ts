import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// import LalezarRegularTtf from "../fonts/Lalezar-Regular.ttf";

const primaryMainColor = "#1e88e5";
const primaryLightColor = "#90caf9";
const primaryDarkColor = "#1976d2";
const primaryTextColor = "#fff";
const primaryTransparentColor = "rgba(162, 210, 255, 0.3)";

const secondaryMainColor = "#bebebe";
const secondaryLightColor = "#cfcfcf";
const secondaryDarkColor = "#404040";
const secondaryTextColor = "#000";

// const lalezar = {
//     fontFamily: "Lalezar",
//     fontStyle: "normal",
//     fontDisplay: "swap",
//     fontWeight: 400,
//     src: `
//       local('Lalezar'),
//       local('Lalezar-Regular'),
//       url(${LalezarRegularTtf}) format('woff2')
//     `,
//     unicodeRange:
//         "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
// };

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
                paddingTop: "0px",
                paddingBottom: "0px"
            }
        },
        MuiListItem: {
            dense: {
                paddingTop: 0,
                paddingBottom: 0
            }
        }
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
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
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
        h1: {
            fontWeight: 700
        },
        h2: {
            fontWeight: 700
        },
        h4: {
            fontWeight: 500
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: 1.6
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.6
        },
        subtitle1: {
            // fontSize: 14,
            // fontWeight: 500,
            // lineHeight: "16px",
            // color: secondaryDarkColor,
            // textTransform: "uppercase"
        },
        body1: {
            // fontFamily: "Roboto",
        },
        subtitle2: {
            fontSize: "28px",
            lineHeight: "28px",
            fontFamily: "'Libre Barcode 39 Extended'"
        }
    }
});

export default theme;
