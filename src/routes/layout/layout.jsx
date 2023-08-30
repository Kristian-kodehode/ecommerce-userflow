import Navigation from "../navigation/navigation";
import LayoutFooter from "../footer/footer";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.mylayout}>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
