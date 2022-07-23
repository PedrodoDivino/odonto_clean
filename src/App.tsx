import { ChakraProvider, theme } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Home } from "./components/pages/Home";
import { Differential } from "./components/pages/Differential";
import { RetanguloPage } from "./components/pages/RetanguloPage";
import { Treatments } from "./components/pages/Treatments";
import WithSubnavigation from "./components/navbar/navbar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={{ sm: "768px", lg: "960px", xl: "1200px" }} h="100vh">
        <WithSubnavigation />
        <Home />
        <Differential />
        <Treatments />
        <RetanguloPage />
      </Container>
    </ChakraProvider>
  );
}
export default App;
