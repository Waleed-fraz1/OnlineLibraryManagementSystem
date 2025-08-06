import React, { useState } from "react";
import settingIcon from "../assets/setting.png";
import userIcon from "../assets/user.png";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const {user} = userSelector((state)=>state.auth);
  const[currentTime,setCurrentTime]=useState("")
  const[currentDate,setCurrentDate]=useState("");
  useEffect(()=>{
    const updateDateTime = ()=>{
      const now = new Date();
      const hours = now.getHours()%12||12;
      const minutes = now.getMinutes().toString.padStart(2,"0");
      const ampm = now.getHours()>=12 ? "PM":"AM";
      setCurrentTime(`${hours}:${minutes}:${ampm}`);
      const options = {months:"short",dat:"numeric",year:"numeric"};
      setCurrentDate(now.toLocaleDateString("en-US",options));

    }
    updateDateTime();
    const intervalId = setInterval(updateDateTime,1000);

    return ()=>clearInterval(intervalId);
  })
  return( <>
  <header className="absolute top-0 bg-white w-full py-4 px-6 left-0 shadow-md flex justify-between items-center">
    <div>
      <img src={userIcon} alt="userIcon" />
      <div className="flex items-center gap-2">
        {/* <span>{user && user.name}</span> */}
        <span>Waleed Fraz</span>
        {/* <span>{user && user.role}</span> */}
        <span>Admin</span>
      </div>
    </div>
    <div></div>
  </header>
  </>
  );
};

export default Header;
