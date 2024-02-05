import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import ContainerLg from "./Container";

export default function Layout(props) {
  const ptValue =
    props.pt !== undefined ? props.pt : { sm: "60px", lg: "92px" };
  return (
    <Box
      as="wrap"
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100svh"}
      color={"black"}
    >
      <Header />
      <Box as="main" id="main" flexGrow={1} pt={ptValue}>
        {props.showTitle && <h2>{props.title}</h2>}
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
  {
  }
}

/* children은 props의 자식값(Layout의 여는 태그, 닫는 태그 사이에 있는 문자) */
