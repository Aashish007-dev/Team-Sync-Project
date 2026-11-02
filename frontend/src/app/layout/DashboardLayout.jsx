
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
        <h1>THis is Navbar</h1>
        <Outlet />
    </div>
  )
};

export default DashboardLayout;
