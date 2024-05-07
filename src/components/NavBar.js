import React, { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setCategory, setSearchSuggestion } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS_API } from "../constant/youtube";
import axios from "axios";

const NavBar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = () => {
    setSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 bg-white shadow-md">
      <div className="flex items-center">
        <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png" alt="YouTube Logo" />
      </div>
      <div className="flex items-center w-1/3">
        <div className="relative flex w-full">
          <input value={input} onFocus={openSuggestion} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" className="w-full py-2 px-4 border border-gray-300 rounded-full outline-none focus:border-gray-500" />
          <button onClick={searchVideo} className="absolute top-0 right-0 bottom-0 bg-gray-100 rounded-full px-4"><CiSearch size="24px" /></button>
        </div>
        {suggestion && searchSuggestion.length !== 0 && (
          <div className="absolute top-full w-full bg-white shadow-md mt-1 rounded-lg border border-gray-200">
            <ul>
              {searchSuggestion.map((text, idx) => (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" key={idx}>{text}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-6">
        <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
        <CiVideoOn size={"24px"} className="cursor-pointer" />
        <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
      </div>
    </div>
  );
};

export default NavBar;
