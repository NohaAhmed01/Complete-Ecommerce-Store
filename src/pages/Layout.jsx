
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const style = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
}
function Layout() {
    return (
        <div style={style}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
