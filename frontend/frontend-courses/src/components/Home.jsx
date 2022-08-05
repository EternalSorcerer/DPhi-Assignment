import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Register from "./Register";

const Home = () => {
    return ( 
        <div className="home">
            {/* <Navbar /> */}
            <h1>Welcome to Online Classroom!</h1>
            <br /><br />
            <Link to="/Register">Sign up to learn new skills:)</Link>
        </div>
     );
}
 
export default Home;