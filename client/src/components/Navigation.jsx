import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  // bg-[#d1dbe4]
  return (
    <div>
      <div className="navbar z-10 bg-[#e8eef1] rounded-lg sm:py-4  sm:px-8 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="font-bold" onClick={()=>navigate('/')}>
                <a>Home</a>
              </li>
              <li className="font-bold text-black">
                <a>Events</a>
                <ul className="p-2">
                  <li className="text-gray-600 hover:text-gray-800" onClick={()=>navigate('/addevent')}>
                    <a>Add Events</a>
                  </li>
                  <li className="text-gray-600 hover:text-gray-800" onClick={()=>navigate('/explore')}>
                    <a>Explore Events</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-lg text-black sm:text-xl -ml-4 hover:bg-[#e8eef1] hover:border-none hover:shadow-none" >CommunionHub</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-black ">
            <li className="font-bold" onClick={()=>navigate('/')}>
              <a>Home</a>
            </li>
            <li className="font-bold">
              <details>
                <summary>Events</summary>
                <ul className="p-2 w-40 bg-white">
                <li className="text-gray-600 hover:text-gray-800" onClick={()=>navigate('/addevent')}>
                    <a>Add Events</a>
                  </li>
                  <li className="text-gray-600 hover:text-gray-800" onClick={()=>navigate('/explore')}>
                    <a>Explore Events</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 sm:w-10 w-8 mr-4 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>


























      
    </div>
  );
};

export default Navigation;
