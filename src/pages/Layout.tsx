import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import ScrollingBanner from "@/components/ScrollingBanner";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollingBanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default Layout;
