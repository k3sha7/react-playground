import { useEffect, useState } from "react";
import { Magnifier } from "../../assets";

const Search = ({ setUserData }) => {
  const [user, setUser] = useState("octocat");
  const searchUser = async () => {
    try {
      const data = await (
        await fetch(`https://api.github.com/users/${user}`)
      ).json();
      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    searchUser();
  }, []);
  return (
    <div className="bg-white shadow-md dark:bg-git-b-2 rounded-lg p-2 flex">
      <Magnifier className="text-[#0477FF] w-12 opacity-70 inline-block mt-2 mr-1 md:mx-4 md:my-2" />
      <input
        className="bg-transparent w-full outline-0 text-sm md:text-base"
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        className="bg-[#0477FF] text-white px-5 py-2 rounded-lg"
        onClick={searchUser}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
