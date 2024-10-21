import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Navbar from "../Layout/Navbar";

export const FrontPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <div className="flex-grow bg-eventPlanner-colors-background">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
