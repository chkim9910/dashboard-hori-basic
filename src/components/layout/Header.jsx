import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  IconButton,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerLg from "./Container";
import { lighten } from "polished";

export default function Header() {
  return (
    <Box
      as="header"
      borderBottom={"1px solid #ddd"}
      background={"purple"}
      height={["100%", null, "100px"]}
      display={["block", null, "flex"]}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ContainerLg ali>
        <Box
          display={"flex"}
          flexDirection={["column", null, "row"]}
          justifyContent={["space-between", null, "center"]}
          alignItems={["space-between", null, "center"]}
          gap={[10, null, 40]}
          color={"white"}
        >
          <Logo>
            <Link to="/">Dashboard</Link>
          </Logo>
          <Nav>
            <NavList>
              <li>
                <Link to="/">Main Dashboard</Link>
              </li>
              <li>
                <Link to="/marketplace">NFT Marketplace</Link>
              </li>
              <li>
                <Link to="/datatables">Data Tables</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </NavList>
          </Nav>
          <ButtonGroup>
            <IconButton
              variant="iconbtn"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
            <IconButton
              // variant="ghost"
              // variant="iconbtn"
              aria-label="Light database"
              icon={<SunIcon />}
            />
          </ButtonGroup>
          <ButtonGroup variant="outline" spacing="6">
            <Button colorScheme="blue">Save</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Box>
      </ContainerLg>
    </Box>
  );
}

// chakra ui 컴포넌트 태그를 이용하면 바로 인라인 스타일을 쓸 수 있음
// 대괄호와 그 안의 내용은 breakpoint 별로 스타일을 다르게 적용한다는 의미[mobile, tablet, web]
// 값이 하나일 경우에는 중괄호를 빼도 무관
// 변수를 사용할 경우 표현법 <Box borderColor={$red}></Box>

// 스타일 컴포넌트
// 컴포넌트가 들어와야 할 때는 소괄호에 컴포넌트 명을 넣어주면 됨
// const 변수 이름 = styled(컴포넌트 이름)`속성: 값;`
const Logo = styled.h1`
  font-size: 24px;
  &:hover {
    background: ${({ theme }) => theme.colors.yellow[100]};
    color: ${({ theme }) => lighten(0.2, theme.colors.brand[300])};
  }
`;

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

const Nav = styled.nav`
  height: 100%;
  background: purple;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin: 0;
  list-style: none;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  li {
    text-align: center;
  }
  a {
    display: block;
    &:hover {
      color: ${lighten(0.5, "purple")};
    }
  }
`;
