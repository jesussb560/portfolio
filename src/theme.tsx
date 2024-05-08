import { Shadows, createTheme } from "@mui/material";

export const primaryColor = '#0d1016';
export const primaryColorV2 = '#161C25';
// export const secondaryColor = '#FCA311';
export const secondaryColor = '#F05230';
export const secondaryColorV2 = '#C4462B';
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
        h2: { fontFamily: titleFont, fontSize: 48, color: white, fontWeight: 600 },
        h3: { fontFamily: titleFont, fontSize: 30, color: white, fontWeight: 600 },
        h4: { fontFamily: titleFont, fontSize: 25, color: white, fontWeight: 600 },
        h5: { fontFamily: titleFont, fontSize: 20, color: white, fontWeight: 600 },
        h6: { fontFamily: titleFont, fontSize: 15, color: white, fontWeight: 600 },
        body1: { fontFamily: bodyFont, color: tertiaryColor, fontSize: 20 },
        body2: { fontFamily: bodyFont, color: primaryColor, fontSize: 20, fontWeight: 500 },
        subtitle1: { fontFamily: bodyFont, color: tertiaryColor, fontSize: 20, fontWeight: 300 },
        subtitle2: { fontFamily: bodyFont, color: white, fontSize: 20, fontWeight: 400 },
        caption: { fontFamily: bodyFont, fontSize: 18, color: tertiaryColor },
    },
    shadows: Array(25).fill("none") as Shadows,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
                body: {
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        color: 'transparent',
                        width: '4px'
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 15,
                        backgroundColor: secondaryColorV2,
                        minWidth: '1px'
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: secondaryColorV2,
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: secondaryColorV2,
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: secondaryColor,
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: secondaryColorV2,
                    },
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
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
                    borderColor: secondaryColor,
                    width: 2 // Cambia el color de la línea de progreso
                },
            },
        },

        MuiStepIcon: {
            styleOverrides: {
                "root": {
                    "&.Mui-active": {
                        "color": primaryColorV2,
                    },
                    "&.Mui-completed": {
                        "color": secondaryColor,
                    }
                }


            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: primaryColor,
                    borderBottomWidth: '2px',
                    borderRadius: 30
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: white,
                    '&.Mui-selected': {
                        color: secondaryColor, // Color del texto del tab activo
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: secondaryColor,
                    borderRadius: 8,
                    font: titleFont
                }
            }
        },
        MuiOutlinedInput: {
            defaultProps: {
                sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: `2px solid ${secondaryColorV2}`,
                    },
                    "&:hover > .MuiOutlinedInput-notchedOutline": {
                        border: `2px solid ${white}`,
                    },
                },
            },
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    color: white,
                    backgroundColor: secondaryColorV2,
                },
                input: {
                    "&:-webkit-autofill": {
                        "-webkit-box-shadow": `0 0 0 100px ${secondaryColorV2} inset`,
                        "-webkit-text-fill-color": white,
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: white,
                    fontFamily: bodyFont,
                    fontSize: 20,
                    '&.Mui-focused': {
                        color: white, // Cambia el color cuando el input está enfocado
                    },
                },
            },
        },
    }
});