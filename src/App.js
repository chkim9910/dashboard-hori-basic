import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views";

function App() {
  return (
    // router 버전이 6이상이기 때문에 <BrowserRouter></BrowserRouter>로 감싸줘야 함
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
