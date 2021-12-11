import Styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Paper from "@mui/material/Paper";

const Layout = ({ children }) => {
  return (
    <>
      <Paper>
        <div className={Styles.container}>
          <Navbar />
          <main className={Styles.main}>{children}</main>
          <Footer />
        </div>
      </Paper>
    </>
  );
};

export default Layout;
