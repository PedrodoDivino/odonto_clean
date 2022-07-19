
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation  from './components/navbar/navbar';
function App() {

  return (
    <ChakraProvider>
    <WithSubnavigation />
    </ChakraProvider>
  )
}
export default App;