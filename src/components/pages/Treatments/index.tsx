import {
  Box,
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
  const [state, setState] = useState(4);
  return (
    <Box w="full" h="auto" mt="64px">
      <Heading size="xl"  mb="-64px">
        Tratamentos
      </Heading>

      <SimpleGrid columns={[1, 2]}>
        {arrayTreatments.slice(0, state).map((infos, i) => {
          return (
            <LinkBox mt="94px" mr="30px" key={infos.id}>
                <Heading textAlign="left" display={"flex"} justifyContent="start">
                  <Image src={infos.icon}mb="9px" marginRight="7px" />
                  <LinkOverlay mb="9px">{infos.title} </LinkOverlay>
                </Heading>
              <Text textAlign="left" >{infos.text}</Text>
            </LinkBox>
          );
        })}
      </SimpleGrid>
      {
        <button
          onClick={() => {
            state <= 4 ? setState(6) : setState(4);
          }}
        >
          {state <= 4 ? "MOSTRAR MAIS" : "MOSTRAR MENOS"}
        </button>
      }
    </Box>
  );
};
