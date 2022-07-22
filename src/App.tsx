import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Home } from "./components/pages/Home";
import WithSubnavigation from "./components/navbar/navbar";
import { Differential } from "./components/pages/Differential";
import { Treatments } from "./components/pages/Treatments";

function App() {
  return (
    <ChakraProvider>
      <Container maxW={{ sm: "768px", lg: "960px", xl: "1200px" }} h="100vh">
        <WithSubnavigation />
        <Home />
        <Differential />
        < Treatments />
      </Container>
    </ChakraProvider>
  );
}
export default App;
