import NavigationTab from "./NavigationTab";
import { useSelector } from "react-redux";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/navigations";

const ASideNav = () => {
  const { employee } = useSelector((state) => state.auth);

  const navigations =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;

  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-3xl font-semibold text-[#CAB8F9]">Team-Sync</h1>
        <p className="text-sm text-(--text-secondary)">
          Enterprise Workspace
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {navigations.map((route) => {
          return (
            <NavigationTab
              path={route.path}
              title={route.title}
              Icon={route.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ASideNav;
