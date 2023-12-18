import { useState } from "react";
import { Moon, Sun } from "../assets";
import { useTheme } from "../context/ThemeContext";
import Details from "../components/github/Details";
import Search from "../components/github/Search";
const Github = () => {
  const [userData, setUserData] = useState({});
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-[#F0F0F0] dark:bg-git-b-1 dark:text-white flex h-screen justify-center items-center font-git">
      <div className="px-[6vw] md:p-0 md:w-2/3">
        <div className="flex justify-between mb-10">
          <span className="text-2xl font-mono font-semibold">DevFinder</span>
          <button
            className="font-mono text-sm tracking-widest"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <span className="flex">
                LIGHT <Sun className="ml-3" />
              </span>
            ) : (
              <span className="flex">
                DARK <Moon className="ml-3" />
              </span>
            )}
          </button>
        </div>
        <Search setUserData={setUserData} />
        <div className="bg-white shadow-md dark:bg-git-b-2 rounded-lg p-8 flex mt-5">
          {userData.message === "Not Found" ? (
            <span className="text-xl"> No User Found... </span>
          ) : (
            <Details data={userData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Github;
