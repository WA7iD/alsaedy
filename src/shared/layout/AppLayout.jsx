import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div dir={"rtl"}>
      <Header />
      <div className="flex flex-col w-full bg-blue-500">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
