import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      as="header"
      borderBottom={"1px solid #ddd"}
      background={"purple"}
      height={["60px", null, "100px"]}
      display={["block", null, "flex"]}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={["block", null, "flex"]}
        justifyContent={"space-between"}
        width={"100%"}
        padding={["20px", null, "80px"]}
        color={"white"}
      >
        <h1 style={{ width: "100px", height: "100%" }}>
          <a href="/">Dashboard</a>
        </h1>
        <nav>
          <ul>
            <Flex gap={"20px"}>
              <Center width={"120px"}>
                <Link to="/">Main Dashboard</Link>
              </Center>
              <Center width={"120px"}>
                <Link to="/marketplace">NFT Marketplace</Link>
              </Center>
              <Center width={"100px"}>
                <Link to="/datatables">Data Tables</Link>
              </Center>
              <Center width={"50px"}>
                <Link to="/profile">Profile</Link>
              </Center>
              <Center width={"80px"}>
                <Link to="/signin">Sign In</Link>
              </Center>
            </Flex>
          </ul>
        </nav>
      </Box>
    </Box>
  );
}

// chakra ui 컴포넌트 태그를 이용하면 바로 인라인 스타일을 쓸 수 있음
// 대괄호와 그 안의 내용은 breakpoint 별로 스타일을 다르게 적용한다는 의미[mobile, tablet, web]
// 값이 하나일 경우에는 중괄호를 빼도 무관
// 변수를 사용할 경우 표현법 <Box borderColor={$red}></Box>
