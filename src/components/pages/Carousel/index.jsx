import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { arrayCarousel } from "../../../helpers/arrayCarousel.ts";

export const Carousel = () => {

  const [data,setdata] = useState([])

  useEffect(() => {

    fetch(arrayCarousel).
    then((Response) => Response.json())
    .then(setdata);
    return () => {

    }
  }, [])

if (!data || data.length) return null
  return (
    <Box
      w="full"
      h="100%"
      mt="64px"
      borderBottom="2px solid rgba(2, 14, 31, 0.09)"
       >
      <Heading size="xl" my="3" mb="35px">
        Dentistas Certificados
      </Heading>
      <Box 
      display= 'flex'
      overflowX='scroll'
      flexDirection='row'
       alignItems='center'
       >
        {arrayCarousel.map((infos) => (
          <LinkBox 
          mr='10'
            minW="fit-content"
            mb='20px'
            key={infos.id}
          >
              <Image
                src={infos.image}
                bgColor="rgba(32, 152, 227, 0.15)"
                borderTopLeftRadius={30}
                borderWidth="10px"


              />
            <Heading size="md" my="2" mb="10px" textAlign="center">
              <LinkOverlay href="#">{infos.title}</LinkOverlay>
            </Heading>
            <Text textAlign="center">{infos.text}</Text>
            <Text textAlign="center">{infos.description}</Text>
          </LinkBox>
        ))}
      </Box>
    </Box>
  );
};
