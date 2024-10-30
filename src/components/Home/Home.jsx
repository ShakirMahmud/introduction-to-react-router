import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <p>Loading...</p>:
                <Outlet></Outlet>

            }
            <h2>Home</h2>
            <p>This is our HomePage</p>
        </div>
    );
};

export default Home;