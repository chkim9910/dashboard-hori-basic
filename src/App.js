import Routers from "./Routers";
import { ChakraProvider } from "@chakra-ui/react";
// import "./assets/scss/style.scss";

function App() {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
