import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="wrap">
      <Header />
      <main id="main">
        <h2>{props.title}</h2>
        {/* props의 자식값(Layout의 여는 태그, 닫는 태그 사이에 있는 문자) */}
        <p>{props.children}</p>
      </main>
      <Footer />
    </div>
  );
}
