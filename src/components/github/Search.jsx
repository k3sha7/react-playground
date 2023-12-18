import { useEffect, useState } from "react";
import { Magnifier } from "../../assets";

const Search = ({ setUserData }) => {
  const [user, setUser] = useState("octocat");
  const [loading, setIsLoading] = useState(false);

  const searchUser = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      setIsLoading(true);
      const data = await (
        await fetch(`https://api.github.com/users/${user}`)
      ).json();
      setUserData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchUser();
  }, []);

  return (
    <form
      className="bg-white shadow-md dark:bg-git-b-2 rounded-lg p-2 flex"
      onSubmit={searchUser}
    >
      <Magnifier className="text-[#0477FF] w-12 opacity-70 inline-block mt-2 mr-1 md:mx-4 md:my-2" />
      <input
        className="bg-transparent w-full outline-0 text-sm md:text-base"
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        className="bg-[#0477FF] flex transition-all items-center text-white px-5 py-2 rounded-lg"
        onClick={searchUser}
        type="submit"
      >
        {loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            ariaHidden="true"
            className="inline mr-3 w-4 h-4 text-gray-600 animate-spin dark:text-white"
            viewBox="0 0 100 101"
          >
            <path
              fill="currentColor"
              d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50Zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919Z"
            />
            <path
              fill="#1C64F2"
              d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165Z"
            />
          </svg>
        )}
        Search
      </button>
    </form>
  );
};

export default Search;
