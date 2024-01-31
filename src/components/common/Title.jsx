import { Heading } from "@chakra-ui/react";

export default function Title(props) {
  return (
    <Heading as={"h2"} my={30} fontSize={20} fontWeight={700} color={"#222"}>
      {props.children}
    </Heading>
  );
}

export function Subtitle(props) {
  return (
    <Heading
      as={"h4"}
      mb={"12px"}
      fontSize={16}
      fontWeight={700}
      color={"#333"}
    >
      {props.children}
    </Heading>
  );
}
