import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Gnb() {
  return (
    <nav>
      <UnorderedList display={{ sm: "none", lg: "flex" }} gap={"40px"}>
        <ListItem>
          <Link to="/">Main Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link to="/marketplace">NFT Marketplace</Link>
        </ListItem>
        <ListItem>
          <Link to="/datatables">Data Tables</Link>
        </ListItem>
        <ListItem>
          <Link to="/profile">Profile</Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
}
