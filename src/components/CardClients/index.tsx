import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { JsonProps } from "../../@types/clientsTypes";

export const CardClients = ({ id, text, name, client, image }: JsonProps) => {
  return (
    <Box
      minW="450px"
      h="250px"
      p={6}
      boxShadow={"0px 5px 10px  rgba(55, 121, 215, 0.25);"}
      borderRadius="15px"
      key={id}
      mr="15px"
      mb="40px"
    >
      <Box
        h="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text w="full">{text}</Text>

        <Box w="full" display="flex" mt="16px">
          <Image src={image} alt="Feedback de nossos Clientes" />
          <Box ml="14px">
            <Heading size="sm">{name}</Heading>
            <Text>{client}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
