import { ThemeProvider } from "styled-components";
import GlobalStyled from "./assets/styles/global";
import { Routes } from "./routes";
import { theme } from "./assets/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
