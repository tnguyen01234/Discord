import React, { useState } from "react";
import "./css/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] =  useState(false)

  const { googleSignIn, user } = UserAuth();
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!user);
    console.log(user)
  }, [user]);


  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_purple">
      <a href="/">
        <img
          src="https://cdn2.downdetector.com/static/uploads/logo/Discord_logo.png"
          alt=""
          className="w-32 h-12 object-contain"
        />
      </a>
      <div className="hidden lg:flex space-x-6">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4">
  
          <button   className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2x1 hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium" onClick={!isLoggedIn ? handleGoogleSignIn : () => navigate('/channels')}>
      {isLoggedIn ? "Open Discord" : "Login"}
    </button>

        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;
