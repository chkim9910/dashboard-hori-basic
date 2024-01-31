import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import ContainerLg from "./Container";

export default function Layout(props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100svh"}
      color={"black"}
    >
      <Header />
      <Box as="main" id="main" flexGrow={1}>
        <ContainerLg>
          <h2>{props.title}</h2>
          {/* props의 자식값(Layout의 여는 태그, 닫는 태그 사이에 있는 문자) */}
          <p>{props.children}</p>
        </ContainerLg>
      </Box>
      <Footer />
    </Box>
  );
}
