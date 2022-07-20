import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import home_img from "../../assets/images/home_img.svg";
import { ButtonWrapper } from "../ButtonWrapper";
import whats_img from "../../assets/images/whats.svg";

export const Home = () => {
  return (
    <Box w="100%" h="410px">
      <Box w="100%">
        <Image
          borderBottomLeftRadius="60px"
          src={home_img}
          alt="Dentista olhando para uma mulher sorrindo"
        />
      </Box>
      <Container maxW="container.sm">
        <Box w="100%">
          <Text
            fontSize="25px"
            fontWeight="medium"
            mt="23px"
            color="rgba(2, 14, 31, 0.69)"
          >
            20 Anos de experiência
          </Text>
          <Box
            as="h2"
            color="rgba(2, 14, 31, 0.85)"
            lineHeight="44px"
            fontWeight="bold"
            fontSize="39px"
          >
            Realizando sonhos de um sorriso perfeito!
          </Box>
          <Flex align="center" mt="24px">
            <ButtonWrapper imgIcon={whats_img} text="Entre em contato" />
            <Link
              href="#"
              ml="17px"
              fontWeight="600"
              color="rgba(12, 99, 223, 1)"
              fontSize="16px"
            >
              Saiba mais
            </Link>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
