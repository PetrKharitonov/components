import "./Layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import MenuItem from "../secComponents/MenuItem";


function Layout() {
  return (
    <div className="wrapper">
      <Header>
        <MenuItem></MenuItem>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
