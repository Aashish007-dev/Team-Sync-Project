import { ChartAreaIcon } from "lucide-react";
import { NavLink } from "react-router";

// eslint-disable-next-line no-unused-vars
const NavigationTab = ({ path, Icon, title }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex gap-3 pl-4 py-2 ${
          isActive ? "border-r-4 border-(--text-primary) bg-(--secondary)" : ""
        }`
      }
      to={path}
      end
    >
      <ChartAreaIcon size={23} />
      {title}
    </NavLink>
  );
};

export default NavigationTab;
