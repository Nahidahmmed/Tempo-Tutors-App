import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="flex flex-1 pt-36">
        {/* Sidebar */}
        <div className="hidden lg:block w-80 bg-black">
          <ul className="menu p-4 w-full min-h-full font-semibold text-lg text-white">
            <li>
              <Link to={"/dashboard/users"} className="block py-2 px-4 hover:text-red-600">Manage Users</Link>
            </li>
            <li>
              <Link to={"/dashboard/addclass"} className="block py-2 px-4 hover:text-red-600">Add Class</Link>
            </li>
            <li>
              <Link to="/dashboard/mycart" className="block py-2 px-4 hover:text-red-600">My Cart</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-4 hover:text-red-600">Home</Link>
            </li>
            <li>
              <Link to="/classes" className="block py-2 px-4 hover:text-red-600">Classes</Link>
            </li>
          </ul>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4">
          <div className="lg:hidden">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
          </div>
          <div className="drawer lg:drawer-open hidden lg:flex lg:flex-col w-full">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
