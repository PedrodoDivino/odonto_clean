import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Home } from "./components/Home";

import WithSubnavigation from "./components/navbar/navbar";
function App() {
  return (
    <ChakraProvider>
      {/* <Container
        maxW={{ sm: "320px", md: "768px", lg: "960px", xl: "1200px" }}
        h="100vh"
      > */}
      <WithSubnavigation />
      <Home />
      {/* </Container> */}
    </ChakraProvider>
  );
}
export default App;
