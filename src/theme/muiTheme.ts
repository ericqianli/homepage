import { createMuiTheme } from "@material-ui/core/styles";

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
        },
        MuiLink: {
            // root: {
            //     "&:hover": {
            //         color: "inherit"
            //     }
            // },
            underlineHover: {
                textDecoration: "none"
            }
        }
    },
    palette: {},
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
        body1: {},
        subtitle1: {
            fontSize: "0.8rem"
        },
        subtitle2: {
            fontSize: "2rem",
            lineHeight: "1ex",
            fontFamily: "'Libre Barcode 39 Extended'"
        }
    }
});

export default theme;
