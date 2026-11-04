import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import ASideNav from "../../features/dashboard/ui/components/ASideNav";
import TopNav from "../../features/dashboard/ui/components/TopNav";

const DashboardLayout = () => {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [mode]);

  return (
    <div className="h-screen grid grid-cols-[1fr_6fr]">
      <div className="border-r border-gray-500 px-6 py-4">
        <ASideNav />
      </div>
      <div className="flex flex-col gap-5 px-6 py-4">
        <TopNav />

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
