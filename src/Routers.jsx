import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views";
import Marketplace from "./views/Marketplace";
import DataTables from "./views/DataTables";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";

const routeArr = [
  { path: "/", element: <Home /> },
  { path: "/marketplace", element: <Marketplace /> },
  { path: "/datatables", element: <DataTables /> },
  { path: "/profile", element: <Profile /> },
  { path: "/signin", element: <SignIn /> },
];

export default function Routers() {
  return (
    // router 페이지 이동을 쉽게 구현하도록 돕는 라이브러리
    // 라우팅은 최상위 파일에서 함
    // router 버전이 6이상이기 때문에 <BrowserRouter></BrowserRouter>로 감싸줘야 함
    // 버전에 맞게 구문 넣을 수 있도록 신경쓰기
    <BrowserRouter>
      <Routes>
        {/* item은 객체 하나를 의미 */}
        {routeArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

// const ColoredRoute = ({ path, element }) => {
//   useEffect(() => {
//     const getBackgroundColor = (path) => {
//       if (path === "/signin") {
//         return "#fff"; // Set background color for the login page
//       }
//       return "#f00"; // Default background color
//     };

//     document.body.style.backgroundColor = getBackgroundColor(path);
//   }, [path]);

//   return <Route path={path} element={element} />;
// };

// export default function Routers() {
//   return (
//     <BrowserRouter>
//       {/* Use the wrapper component */}
//       <Routes>
//         <ColoredRoute path="/" element={<Home />} />
//         <ColoredRoute path="/marketplace" element={<Marketplace />} />
//         <ColoredRoute path="/datatables" element={<DataTables />} />
//         <ColoredRoute path="/profile" element={<Profile />} />
//         <ColoredRoute path="/signin" element={<SignIn />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
