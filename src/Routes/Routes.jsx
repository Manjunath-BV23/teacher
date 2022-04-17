import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Home } from "../Components/Home/Home"
import { Login } from "../Components/Login/Login"
import { Navbar } from "../Components/Nav/Navbar";
import { Register } from "../Components/Register/Register"

export const AllRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/login" element={<Login/>}></Route>
                <Route path = "/register" element={<Register/>}></Route>

            </Routes>
        </>
    )
}