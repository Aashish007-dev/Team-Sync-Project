
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const DashboardLayout = () => {
    const {mode} = useSelector(state => state.theme);

    useEffect(()=> {
        if(mode === 'light') {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    }, [mode])


  return (
    <div>
        <h1>THis is Navbar</h1>
        <Outlet />
    </div>
  )
};

export default DashboardLayout;
