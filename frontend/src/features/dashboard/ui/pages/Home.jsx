import { useDispatch } from "react-redux"
import { toggleTheme } from "../../../../shared/state/themeSlice";


const Home = () => {


    const dispatch = useDispatch();

    const handleThemeChange = () => {
        dispatch(toggleTheme())
    }

  return (
    <div>
        <div>Home</div>
    <button onClick={handleThemeChange}>change theme</button>
    </div>
  )
}

export default Home