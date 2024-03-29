import { Box, Container } from "@chakra-ui/react";

export default function ContainerLg(props) {
  return (
    <Container
      maxW={1280}
      height={"100%"}
      mx={"auto"}
      px={["20px", null, 0]}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      color={"white"}
    >
      {props.children}
    </Container>
  );
}

export function Section(props) {
  const backgroundColor = props.isLightBackground ? "white" : "gray.100";
  return (
    <Box py={"100px"} bg={backgroundColor}>
      <Container>{props.children}</Container>
    </Box>
  );
}
