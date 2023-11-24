import { BrowserRouter as Router } from "react-router-dom"
import { Routers } from "./routes/routes"
import { AuthProvider } from "./context/context"
import { ThemeProvider } from "styled-components"
import Global from "./assets/styles/global"
import { stateTheme } from "./redux/features/theme"
import { useSelector } from "react-redux"

export const lightTheme = {
  bgColorDark: "#EBEBEB",
  bgDarkBlur: "rgba(235, 235, 235, 0.51)",
  colorText: "#141414",
  colorDestaque: "#4CAF50",
  colorBgDark: "#FFFFFF",
  destaqueDark: "#BDBDBD",
  colorBorderDark: "#DDDDDD",

  colorBtnBg: "#EDEDED",
  searchSideBg: "#CCCCCC",
  isActiveColor: "#191919"
}

export const darkTheme = {
  bgColorDark: "#111111",
  bgDarkBlur: "rgba(13, 13, 13, 0.65)",
  colorText: "#F2F2F2",
  colorDestaque: "#33996B",
  colorBgDark: "#1A1A1A",
  destaqueDark: "#141414",
  colorBorderDark: "#292929",

  colorBtnBg: "#010101",
  searchSideBg: "#121212",
  isActiveColor: "#F2F2F2"

}

function App() {
  const themeState = useSelector(stateTheme);

  return (
    <ThemeProvider theme={themeState === "dark" ? darkTheme : lightTheme}>
      <AuthProvider>
        <Router>
          <Global />
          <Routers />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
