import './App.css';
// 부트스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";

import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';

import PrivateRoute from './Route/PrivateRoute';


function App() {
  // 1. 전체상품페이지, 로그인, 상품상세페이지
  // 1-1. 네비게이션바 만들기
  // 2. 전체상품페에지에서는 전체 상품을 볼 수 있다.
  // 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
  // 4. 상품디테일을 눌렀으니, 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다
  // 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
  // 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
  // 7. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
  // 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
  // 9. 상품을 검색할 수 있다.

  // true면 로그인됨, false면 로그인이 안됨
  const [authenticate, setAuthenticate] = useState(false);
  // authenticate 변화보기
  useEffect(() => {
    console.log("aaaa", authenticate)
  }, [authenticate])
  return (
    <div className="all-container">
      {/* 1-1. 네비게이션바 만들기 */}
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      {/* 1. 전체상품페이지, 로그인, 상품상세페이지 */}
      <Routes>
        <Route path="/" element={ <ProductAll /> } />
        <Route path="/login" element={ <Login setAuthenticate={setAuthenticate} /> } />
        {/* 로그인상태가 아닐때에는 로그인창으로 */}
        <Route path="/product/:id" element={ <PrivateRoute authenticate={authenticate} /> } />
      </Routes>
    </div>
  );
}

export default App;
