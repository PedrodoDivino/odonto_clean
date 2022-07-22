import { Image, Link } from "@chakra-ui/react";

type ButtonProps = {
  text: string;
  imgIcon: string;
  width: string;
  marginLeft?: string;
};

export  const ButtonWrapper = ({ text, imgIcon, width, marginLeft }: ButtonProps) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={width}
      h="32px"
      ml={marginLeft}
      colorScheme="white"
      bgGradient="linear(rgba(32, 152, 227, 1), rgba(12, 99, 223, 1))"
      href="#"
      fontWeight="600"
      color="#ffffff"
      fontSize="16px"
      borderRadius="5px"
    >
      <Image
        mr="6px"
        src={imgIcon}
        alt="WhatsApp"
        bg="rgba(242, 245, 250, 0.15)"
        borderRadius="2px"
        p={0.5}
      />
      {text}
    </Link>
  );
};
