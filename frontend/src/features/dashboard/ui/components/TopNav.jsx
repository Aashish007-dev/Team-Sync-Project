import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const TopNav = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="flex  justify-between items-center">
      <div className="flex gap-4 w-[30%] rounded px-3 py-2 items-center bg-[var(--bg-surface)] border border-gray-700">
        <Search size={23} />
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Search Workspace.."
        />
      </div>
      <div className="flex gap-5">
        {mode === "light" ? (
          <Moon onClick={handleThemeChange} size={23} />
        ) : (
          <Lightbulb size={23} onClick={handleThemeChange} />
        )}
        <Bell size={23} />
        <Menu size={23} />
      </div>
    </div>
  );
};

export default TopNav;
