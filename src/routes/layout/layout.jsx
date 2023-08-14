import Navigation from "../navigation/navigation";
import { Outlet } from "react-router-dom";
import "./layout.module.css";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
