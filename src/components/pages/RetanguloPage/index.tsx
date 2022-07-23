import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ButtonWrapper } from "../../ButtonWrapper";
import agendar_black from "../../../assets/images/agendar_black.svg";
import homem_no_dentista from "../../../assets/images/homem_no_dentista.svg";
import homem_no_dentistamb from "../../../assets/images/homem_no_dentistamb.svg";
import { useState } from "react";

export const RetanguloPage = () => {
  const [img, setImage] = useState({});
  return (
    <Box
      w="full"
      boxShadow=" 10px 10px 30px rgba(55, 121, 215, 0.25)"
      bg="#2098E3"
      borderRadius="20px"
      mt="60px"
      mb="60px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex
        w={{ base: "100%", md: "70%" }}
        align="start"
        justify="space-around"
        direction="column"
        p={[4, 4, 8, 16]}
      >
        <Heading size="xl" color="#fff" mb="15px" lineHeight="35px">
          Venha fazer uma visita e conhecer nossa clínica!
        </Heading>
        <Box>
          <Text color="#fff" mb="22px">
            Estamos ansiosos para conhecer você e toda sua família.
          </Text>
        </Box>

        <ButtonWrapper
          colorfont="#000"
          text="Agende Agora"
          imgIcon={agendar_black}
          width="170px"
          bgColor="white 100%"
        />
      </Flex>

      <Box h="full">
        <Image
          boxSize="200%"
          src={homem_no_dentistamb}
          alt="Homem sendo atendido por um dentista"
        />
      </Box>
    </Box>
  );
};
