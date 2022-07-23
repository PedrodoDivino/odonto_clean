import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ButtonWrapper } from "../../ButtonWrapper";
import agendar_black from "../../../assets/images/agendar_black.svg";
import homem_no_dentista from "../../../assets/images/homem_no_dentista.svg";

export const RetanguloPage = () => {
  return (
    <Box
      w="full"
      boxShadow=" 10px 10px 30px rgba(55, 121, 215, 0.25)"
      h="auto"
      bg="#2098E3"
      borderRadius="20px"
      mt="60px"
      mb="60px"
    >
      <Flex p={4} align="start" justify="space-around" direction="column">
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

      <Box mt="20px">
        <Image
          src={homem_no_dentista}
          alt="Homem sendo atendido por um dentista"
        />
      </Box>
    </Box>
  );
};
