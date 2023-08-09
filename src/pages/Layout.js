import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
                Header
            </header>
            <main>
                {/* Home, About, Profile이 Layout의 하위 컴포넌트 이므로
                Outlet 위치에 Home, About, Profile이 보여진다. */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;