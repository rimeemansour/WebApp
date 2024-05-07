import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  RiHome2Line,
  RiVideoAddLine,
  RiHistoryLine,
  RiPlayCircleLine
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center text-black h-full w-20 fixed top-10 left-0 overflow-y-auto">
      <NavLink to="/" className="flex flex-col items-center p-4 mt-8 hover:text-red-500" activeClassName="text-red-500" exact>
        <RiHome2Line size={24} />
        <span className="mt-2">Home</span>
      </NavLink>
      <NavLink to="/upload" className="flex flex-col items-center p-4 hover:text-red-500" activeClassName="text-red-500">
        <RiVideoAddLine size={24} />
        <span className="mt-2">Upload</span>
      </NavLink>
      <NavLink to="/history" className="flex flex-col items-center p-4 hover:text-red-500" activeClassName="text-red-500">
        <RiHistoryLine size={24} />
        <span className="mt-2">History</span>
      </NavLink>
      <NavLink to="/watch?v=VIDEO_ID" className="flex flex-col items-center p-4 hover:text-red-500" activeClassName="text-red-500">
        <RiPlayCircleLine size={24} />
        <span className="mt-2">Watch</span>
      </NavLink>
    </div>

  );
};

export default Sidebar;
