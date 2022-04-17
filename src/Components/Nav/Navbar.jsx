import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px"
        }}>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
        </div>
    )
}