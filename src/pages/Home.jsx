import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {useSelector} from "react-redux";
import{Navigate} from "react-router-dom";
import Sidebar from"../layout/SideBar";
const Home = () => {
  const [isSideBarOpen,serIsSideBarOpen] = useState(false);
  const [selectedComponent,setSelectedComponent] = useState("");
  const {user,isAuthenticated} = useSelector((state)=>state.auth);
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>;
  }
  return (
    <>
  <div>
    <div className="relative md:p1-64 flex min-h-screen bg-gray-100">
      <div className="md:hidden z-10 absolute right-6 top-4 sm:top-6 flex  justify-center items-center bg-black rounded-md h-9 w-9 text-white">
      <GiHamburgerMenu className="text-2x1" onClick={()=> setIsSideBarOpen(!isSideBarOpen)}/>
    </div>
    <SideBar isSideBarOpen={isSideBarOpen} setIsSideOpen={setIsSideBarOpen} setSelectedComponent={setSelectedComponent} />
  </div>

  </>;
};

export default Home;
