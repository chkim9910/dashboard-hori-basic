import { Box, Container } from "@chakra-ui/react";

export default function ContainerLg(props) {
  return (
    <Container
      maxW={1280}
      mx={"auto"}
      px={["20px", null, 0]}
      color={"white"}
      height={"100%"}
      display={"flex"}
      alignContent={"center"}
    >
      {props.children}
    </Container>
  );
}

export function Section() {
  <Box></Box>;
}
