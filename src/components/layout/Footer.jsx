import { Box, Heading } from "@chakra-ui/react";
import ContainerLg from "./Container";
import { lighten } from "polished";

export default function Footer() {
  return (
    <Box
      as="footer"
      height={["60px", null, "100px"]}
      bg={lighten(0, "purple")}
      display={"flex"}
      justifyContent={"center"}
    >
      <ContainerLg>
        <Heading fontSize={24}>Footer</Heading>
      </ContainerLg>
    </Box>
  );
}

// display={"flex"}
//         alignItems={"center"}
//         height={"100%"}
//         maxW={["sm", "container.md", "container.xl"]}
//         margin={"0 auto"}
