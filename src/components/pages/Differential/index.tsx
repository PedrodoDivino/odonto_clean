import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { arrayCards } from "../../../helpers/arrayCards";

export const Differential = () => {
  return (
    <Box w="full" h="auto" mt="64px">
      <Heading size="xl" my="3" mb="16px">
        Diferencial
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} gap="30px">
        {arrayCards.map((infos) => (
          <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            rounded="md"
            key={infos.id}
          >
            <Box display="flex" justifyContent="center" mb="16px">
              <Image
                src={infos.image}
                p={4}
                bgColor="rgba(32, 152, 227, 0.15)"
                borderRadius="100%"
              />
            </Box>
            <Heading size="md" my="2" mb="10px" textAlign="center">
              <LinkOverlay href="#">{infos.title}</LinkOverlay>
            </Heading>
            <Text textAlign="center">{infos.text}</Text>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
