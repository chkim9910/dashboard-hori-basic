import Title, { Subtitle } from "../components/common/Title";
import { Section } from "../components/layout/Container";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout title="home">
      <Section>
        <Title>회사소개</Title>
        <Subtitle>인사글</Subtitle>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          quam, reiciendis, quis consequuntur accusamus nisi esse maxime unde,
          voluptate provident ipsam illo minus quaerat? Fugit, officiis
          aspernatur? Laudantium, quis vero.
        </p>
      </Section>
      <Section>
        <Title>회사비전</Title>
        <Subtitle>소개말</Subtitle>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          culpa aspernatur iste non assumenda placeat, nostrum similique
          quisquam ipsum pariatur eaque. Reprehenderit impedit veritatis
          asperiores voluptatum itaque natus magnam soluta.
        </p>
      </Section>
    </Layout>
  );
}
