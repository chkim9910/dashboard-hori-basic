// import { Image, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
// import Tab from "../../components/common/Tab";
import Title from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import topImg from "../../assets/images/contact-bg.png";
import { Image } from "@chakra-ui/react";

export default function Marketplace() {
  const boxStyle = {
    width: "200px",
    height: "200px",
    background: "violet",
    borderRadius: "50%",
  };

  return (
    <Layout title="Marketplace" showTitle={true} pt={0}>
      <Image className="top-cont" src={topImg} alt="hello" height={"100%"} />
      {/* <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      <motion.div
        style={boxStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 300 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
      <Section>
        <Title>마켓플레이스 소개</Title>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          quam, reiciendis, quis consequuntur accusamus nisi esse maxime unde,
          voluptate provident ipsam illo minus quaerat? Fugit, officiis
          aspernatur? Laudantium, quis vero.
        </p>
      </Section>
      <Section>
        <Title>마켓플레이스 소개</Title>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          quam, reiciendis, quis consequuntur accusamus nisi esse maxime unde,
          voluptate provident ipsam illo minus quaerat? Fugit, officiis
          aspernatur? Laudantium, quis vero.
        </p>
      </Section>
      <Section>
        <Title>마켓플레이스 소개</Title>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          quam, reiciendis, quis consequuntur accusamus nisi esse maxime unde,
          voluptate provident ipsam illo minus quaerat? Fugit, officiis
          aspernatur? Laudantium, quis vero.
        </p>
      </Section>
    </Layout>
  );
}
