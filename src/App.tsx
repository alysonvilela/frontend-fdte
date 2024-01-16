import { ThemeProvider } from "styled-components";
import GlobalStyled from "./assets/styles/global";
import { Routes } from "./routes";
import { theme } from "./assets/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
