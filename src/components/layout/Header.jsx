import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  IconButton,
  ButtonGroup,
  Button,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerLg from "./Container";
import { lighten } from "polished";
import Gnb from "./Gnb";
import { FaHamburger } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <Box
        as="header"
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        backdropFilter={"saturate(180%) blur(15px)"}
        backgroundColor={"rgba(0,0,0,.1)"}
        flexDirection={["row", null, "column"]}
        gap={0}
      >
        {/* tnb */}
        <Box
          display={["none", null, null, null, "block"]}
          bg={"rgba(0,0,0,.6)"}
          // color={"#fff"}
          height={"32px"}
        >
          <Container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"100%"}
          >
            <ButtonGroup className="btnleft" gap={"20px"}>
              <Button colorScheme="teal" variant="link-12">
                공공 기관용
              </Button>
              <Button colorScheme="teal" variant="link-12">
                금융 클라우드
              </Button>
            </ButtonGroup>
            <ButtonGroup className="btnright" gap={"20px"}>
              <Button colorScheme="teal" variant="link-12">
                로그인
              </Button>
              <Button colorScheme="teal" variant="link-12">
                회원가입
              </Button>
              <Button colorScheme="teal" variant="link-12">
                Language
              </Button>
            </ButtonGroup>
          </Container>
        </Box>
        {/* header */}
        <Box
          borderBottom={"1px solid #ddd"}
          background={"rgba(0,0,0,.05)"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={{ sm: "52px", lg: "100px" }}
        >
          <Container
            display={"flex"}
            flexDirection={["column", null, "row"]}
            justifyContent={"space-between"}
            alignItems={["space-between", null, "center"]}
            gap={[10, null, 40]}
            color={"white"}
          >
            <Heading as={"h1"}>
              <Link to="/">Dashboard</Link>
            </Heading>
            <Gnb />
            <ButtonGroup>
              <IconButton
                variant="ghost"
                aria-label="Search database"
                fontSize="25px"
                color={"white"}
                icon={<SearchIcon />}
              />
              <Button
                colorScheme="teal"
                variant="outline"
                display={{ sm: "none", lg: "block" }}
              >
                콘솔
              </Button>
              <Button
                colorScheme="teal"
                variant="solid"
                display={{ sm: "none", lg: "block" }}
              >
                문의하기
              </Button>
              <Button
                variant={"ghost"}
                display={{ sm: "block", lg: "none" }}
                fontSize={"30px"}
                color={"white"}
              >
                <FaHamburger />
              </Button>
              {/* <IconButton
                // variant="ghost"
                // variant="iconbtn"
                aria-label="Light database"
                icon={<SunIcon />}
              /> */}
            </ButtonGroup>
            {/* <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="blue">Save</Button>
              <Button>Cancel</Button>
            </ButtonGroup> */}
          </Container>
        </Box>
      </Box>
    </>
  );
}

// chakra ui 컴포넌트 태그를 이용하면 바로 인라인 스타일을 쓸 수 있음
// 대괄호와 그 안의 내용은 breakpoint 별로 스타일을 다르게 적용한다는 의미[mobile, tablet, web]
// 값이 하나일 경우에는 중괄호를 빼도 무관
// 변수를 사용할 경우 표현법 <Box borderColor={$red}></Box>

// 스타일 컴포넌트
// 컴포넌트가 들어와야 할 때는 소괄호에 컴포넌트 명을 넣어주면 됨
// const 변수 이름 = styled(컴포넌트 이름)`속성: 값;`
// const Logo = styled.h1`
//   font-size: 24px;
//   &:hover {
//     background: ${({ theme }) => theme.colors.yellow[100]};
//     color: ${({ theme }) => lighten(0.2, theme.colors.brand[300])};
//   }
// `;

// const IconBtnGoup = styled(ButtonGroup)`
//   button {
//     background: transparent;
//     /* color: white; */
//     &:hover {
//       background: ${lighten(0.1, "purple")};

//       /* background: rgba(236, 255, 64, 0.4); */
//     }
//   }
// `;

// const Nav = styled.nav`
//   height: 100%;
//   background: purple;
// `;

// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   gap: 20px;
//   height: 100%;
//   margin: 0;
//   list-style: none;
//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//   }
//   li {
//     text-align: center;
//   }
//   a {
//     display: block;
//     &:hover {
//       color: ${lighten(0.5, "purple")};
//     }
//   }
// `;
