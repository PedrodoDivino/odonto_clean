import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

import { arrayCards } from "../../../helpers/arrayCards";

export const Differential = () => {
  return (
    <Box w="full" h="100vh">
      <Heading size="md" my="2">
        Diferencial
      </Heading>
      {arrayCards.map((infos) => (
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          key={Date()}
        >
          <Box>
            <Image src={infos.image} boxSize="70px" />
          </Box>
          <Heading size="md" my="2">
            <LinkOverlay href="#">{infos.title}</LinkOverlay>
          </Heading>
          <Text>{infos.text}</Text>
        </LinkBox>
      ))}
    </Box>
  );
};
