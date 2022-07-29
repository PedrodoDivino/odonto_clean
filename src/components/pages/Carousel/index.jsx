import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { arrayCarousel } from "../../../helpers/arrayCarousel.ts";

export const Carousel = () => {

  const [data,setdata] = useState([])

  useEffect(() => {

    fetch(arrayCarousel).
    then((Response) => Response.json())
    .then(console.log(arrayCarousel));
    return () => {

    }
  }, [])

if (!data || data.length) return null
  return (
    <Box
      w="full"
      h="auto"
      mt="64px"
      borderBottom="2px solid rgba(2, 14, 31, 0.09)"
    >
      <Heading size="xl" my="3" mb="35px">
        Dentistas Certificados
      </Heading>

      <SimpleGrid columns={[1, 2, 4]} mb="100px">
        {arrayCarousel.map((infos) => (
          <LinkBox

            as="article"
            maxW="sm"
            borderWidth="1px"
            rounded="md"
            key={infos.id}
          >
            <Box display="flex" justifyContent="center" >
              <Image
                src={infos.image}
                bgColor="rgba(32, 152, 227, 0.15)"
                borderTopLeftRadius={30}
              />
            </Box>
            <Heading size="md" my="2" mb="10px" textAlign="center">
              <LinkOverlay href="#">{infos.title}</LinkOverlay>
            </Heading>
            <Text textAlign="center">{infos.text}</Text>
            <Text textAlign="center">{infos.description}</Text>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
