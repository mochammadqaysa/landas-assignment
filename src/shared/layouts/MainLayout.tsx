import { Outlet } from "react-router-dom";
import Header from "@/shared/components/organisms/Header";
import Footer from "@/shared/components/organisms/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;