import { Box, Heading } from "@chakra-ui/react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import { arrayClients } from "../../../helpers/arrayClients";

import { CardClients } from "../../CardClients";
import { JsonProps } from "../../../@types/clientsTypes";

export const Clients = () => {
  return (
    <Box w="full">
      <Box w="full" mb="30px">
        <Heading>Nossos Clientes</Heading>
      </Box>
      <Box
        w="full"
        mb="20px"
        display="flex"
        flexDirection="row"
        overflow="scroll"
      >
        {arrayClients.map((clients: JsonProps) => (
          <CardClients
            id={clients.id}
            text={clients.text}
            client={clients.client}
            name={clients.name}
            image={clients.image}
          />
        ))}
      </Box>

      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
