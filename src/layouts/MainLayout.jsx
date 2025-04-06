import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import Nav from "../Components/Common/Nav";


export default function MainLayout() {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}
