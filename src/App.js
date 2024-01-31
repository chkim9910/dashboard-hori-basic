// import "./assets/scss/style.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./Routers";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
