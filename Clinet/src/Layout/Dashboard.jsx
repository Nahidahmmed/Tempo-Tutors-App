import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import DashboardHeader from "../Pages/Shared/DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />

      <div className="pt-32">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
