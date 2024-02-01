// import "./assets/scss/style.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./Routers";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
