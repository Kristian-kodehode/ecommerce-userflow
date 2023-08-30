import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const LayoutFooter = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.footercontainer}>
        <Link to="/aboutproject" className={styles.footerlinks}>
          <h4>Read about this project</h4>
        </Link>
        <h4>
          Thanks for checking out the entirety of this page..even the bottom!
        </h4>
      </div>
    </div>
  );
};

export default LayoutFooter;
