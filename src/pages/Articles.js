import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
    return(
        <div>
            {/* Outlet 컴포넌트는 부모 컴포넌트 위치에 자식 컴포넌트를 보여줄 때 사용합니다. 
            현재 /articles 는 Articles.js 컴포넌트를 사용하고(부모)
            /articles/숫자 는 Article.js 컴포넌트를 사용하는데(자식)
            그래서 Outlet을 부모측인 Articles.js에 사용하면
            자식쪽 요소인 Article.js가 같이 표현됩니다. */}
            <Outlet/>
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;