import { ThemeProvider } from "styled-components";
import GlobalStyled from "./assets/styles/global";
import { Routes } from "./routes";
import { theme } from "./assets/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Modal } from "./components/Modal";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Routes />
        <Modal />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
