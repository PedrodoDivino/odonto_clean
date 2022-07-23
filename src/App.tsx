import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Home } from "./components/pages/Home";
import WithSubnavigation from "./components/Navbar/navbar";
import { Differential } from "./components/pages/Differential";
import { RetanguloPage } from "./components/pages/RetanguloPage";
import { theme } from "./styles/theme";
import { Treatments } from "./components/pages/Treatments";


function App() {
  return (
    <ChakraProvider theme={theme}>
      
       <WithSubnavigation  />
      <Container maxW={{ sm: "768px", lg: "960px", xl: "1200px" }} h="100vh">
        <Home />
        <Differential />
        < Treatments />
        <RetanguloPage />
      </Container>
    </ChakraProvider>
  );
}
export default App;
