import Title from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";

export default function Profile() {
  return (
    <Layout title="Profile" showTitle={true}>
      <Section>
        <Title>프로필</Title>
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
