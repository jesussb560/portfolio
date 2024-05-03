import { Shadows, createTheme } from "@mui/material";

export const primaryColor = '#0d1016';
export const primaryColorV2 = '#161C25';
export const secondaryColor = '#FCA311';
export const tertiaryColor = '#9999A1';
export const white = '#fff'

export const titleFont: string = "Roboto Condensed, sans-serif;";
export const bodyFont: string = "Lato, sans-serif";

export const appTheme = createTheme({
    palette: {
        background: {
            default: primaryColor
        },
        primary: {
            main: primaryColor,
            contrastText: white,
        },
        secondary: {
            main: secondaryColor,
            contrastText: white,
        },
    },
    typography: {
        h1: { fontFamily: titleFont, fontSize: 60, color: white, fontWeight: 600 },
        h2: { fontFamily: titleFont, fontSize: 45, color: white, fontWeight: 600 },
        h3: { fontFamily: titleFont, fontSize: 30, color: white, fontWeight: 600 },
        h4: { fontFamily: titleFont, fontSize: 25, color: white, fontWeight: 600 },
        h5: { fontFamily: titleFont, fontSize: 20, color: white, fontWeight: 600 },
        h6: { fontFamily: titleFont, fontSize: 15, color: white, fontWeight: 600 },
        body1: { fontFamily: bodyFont, color: tertiaryColor, fontSize: 20 },
        subtitle1: { fontFamily: bodyFont, color: tertiaryColor, fontSize: 20, fontWeight: 300 },
        caption: { fontFamily: bodyFont, fontSize: 18, color: tertiaryColor },
    },
    shadows: Array(25).fill("none") as Shadows,
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: primaryColor
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: titleFont,
                    color: primaryColor
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: primaryColor,
                },
            },
        },
        MuiDrawer: {
            defaultProps: {
                PaperProps: {
                    sx: {
                        backgroundColor: primaryColorV2,
                        color: white,
                    },
                },
            },
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: 'red', // Cambia el color de la línea de progreso
                },
            },
        },
    }
});