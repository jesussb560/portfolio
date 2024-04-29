import { GlobalStyles, ThemeProvider } from "@mui/material"
import { AppRoutes } from "./components/navigation/AppRoutes"
import { appTheme, primaryColor } from "./theme"

function App() {

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ThemeProvider theme={appTheme} >
        <GlobalStyles styles={{
          body: {
            backgroundColor: primaryColor,
            margin: 0,
            padding: 0
          }
        }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: appTheme.spacing(0, 3),
            ...appTheme.mixins.toolbar,
            marginTop: appTheme.mixins.toolbar.minHeight,
          }}
        />
        <AppRoutes />
      </ThemeProvider>
    </main>
  )
}

export default App
