import { Outlet } from "react-router-dom"
import Navbar from "../Common/Navbar"
import Footer from "../Common/Footer"


const Layout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   
   
   </>
  )
}

export default Layout
