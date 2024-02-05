import { Image } from "@chakra-ui/react";
import Tab from "../../components/common/Tab";
import Title from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";

export default function Marketplace() {
  const boxStyle = {
    width: "200px",
    height: "200px",
    background: "violet",
    borderRadius: "50%",
  };

  return (
    <Layout title="Marketplace" showTitle={true} pt={0}>
      {/* <Image
        className="top-cont"
        src="../../assets/images/cnu3j07sra271.png"
        alt="hello"
        height={"50%"}
      /> */}

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
