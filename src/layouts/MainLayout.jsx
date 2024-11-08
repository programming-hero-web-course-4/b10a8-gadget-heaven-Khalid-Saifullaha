import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Navbar></Navbar>
      <div className="container mx-auto px-2 min-h-[calc(100vh-548px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
