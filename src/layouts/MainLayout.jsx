import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}


