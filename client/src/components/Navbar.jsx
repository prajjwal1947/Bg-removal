/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="Logo" />
      </Link>

      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full text-sm font-medium text-gray-700">
            <img src={assets.credit_icon} alt="Credits" className="w-5 h-5 mr-2" />
            <p>Credits: {credit}</p>
          </div>
          
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get started
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="Arrow" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
