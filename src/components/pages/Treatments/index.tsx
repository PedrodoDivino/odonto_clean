import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { arrayTreatments } from "../../../helpers/arrayTreatments";
export const Treatments = () => {
    const [state,setState] = useState(4);
  return (
    <Box w="full" h="auto" mt="64px">
      <Heading size="xl" my="3" mb="16px">
        Tratamentos
      </Heading>

      <SimpleGrid columns={[1, 2]}>

        {arrayTreatments.slice(0,state).map((infos,i) => {
            return (

                    <LinkBox key={infos.id}>
                      <Flex display={'flex'}>
                      <Heading  textAlign="left" justifyContent="start">
                      <Image 
                              src={infos.icon}
                            />
                        <LinkOverlay >
                          {infos.title}
                          </LinkOverlay>
                      </Heading>
                      </Flex>
                      <Text textAlign="left">
                      {infos.text}
                      </Text>
                    </LinkBox>
            )
        })}
      </SimpleGrid>
    {state <= 4 ?  (< button onClick={()=>{
        setState(6);

     }}>Mostrar mais</button>):(
        < button onClick={()=>{
            setState(4);
    
         }}>Mostrar menos</button>
     )} 
     {< button onClick={()=>{
      state <= 4 ? setState(6):setState(4);
     }}>{state <= 4 ?'MOSTRAR MAIS' : 'MOSTRAR MENOS'}</button>}
    </Box>
  );

};
