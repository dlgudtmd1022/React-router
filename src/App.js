import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";

function App() {
  return (
      <div>
          <ul>
              <li>
                  <Link to="/">홈</Link>
              </li>
              <li>
                  <Link to="/about">소개</Link>
              </li>
              <li>
                  <Link to="/profile/velopert">velopert의 프로필</Link>
              </li>
              <li>
                  <Link to="/profile/gildong">gildong의 프로필</Link>
              </li>
              <li>
                  <Link to="/profile/lee">lee의 프로필</Link>
              </li>
              <li>
                  <Link to="/Articles">게시글 목록</Link>
              </li>
          </ul>
          <hr/>
          <Routes>
              {/* path로 localhost:3030 이후 uri를 지정
                component 프로퍼티로 해당 주소 접속 시 보여줄 컴포너트를 지정*/}

              {/* localhost:3030/ 접속시 Home 컴포너트가 화면에 출려됨*/}
              <Route element={<Layout />}>
                <Route path="/" Component={Home}/>
                {/* localhost:3030/about 접속시 About 컴포너트가 화면에 출려됨*/}
                <Route path="/about" Component={About}/>
                <Route path="/info" Component={About}/>
                <Route path="/profile/:username" Component={Profile}/>
              </Route>
              <Route path="/articles" element={<Articles/>}>
                <Route path=":id" element={<Article />}/>
              </Route>
        </Routes>
      </div>
  );
}

export default App;
