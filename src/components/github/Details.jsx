import { Company, Location, Twitter, Website } from "../../assets";
import { formatDate } from "../../utils/helpers";

const Details = ({ data }) => {
  const checkNull = (data) => {
    return data ? data : <span className="opacity-60"> Not Available </span>;
  };

  return (
    <>
      <img
        className="w-28 h-28 rounded-full hidden lg:inline-block"
        src={data.avatar_url}
        alt="img"
      />
      <div className="lg:px-9 w-full">
        <div className="flex lg:justify-between">
          <img
            className="w-20 h-20 md:w-24 md:h-24 mr-6 rounded-full lg:hidden inline-block"
            src={data.avatar_url}
            alt="img"
          />
          <div>
            <p className="font-mono tracking-wide font-semibold md:text-2xl lg:mb-2">
              {checkNull(data.name)}
            </p>
            <a
              target="_blank"
              href={data.html_url}
              className="font-thin text-blue-500 inline-block py-2 lg:p-0"
            >
              @{data.login}
            </a>
            <p className="font-mono text-sm opacity-70 lg:hidden">
              Joined {formatDate(data.created_at)}
            </p>
          </div>
          <p className="font-mono text-sm opacity-70 hidden lg:inline-block">
            Joined {formatDate(data.created_at)}
          </p>
        </div>
        <p className={`py-8 ${data.bio ? "" : "opacity-70"}`}>
          {data.bio ? data.bio : "This profile has no bio"}
        </p>
        <div className="bg-[#F0F0F0] dark:bg-[#141c2f] mb-8 flex rounded-lg py-5 px-8">
          <div className="w-1/3">
            <p className="text-xs opacity-70 mb-2">Repos</p>
            <span className="text-xl font-mono font-bold">
              {data.public_repos}
            </span>
          </div>
          <div className="w-1/3">
            <p className="text-xs opacity-70 mb-2">Followers</p>
            <span className="text-xl font-mono font-bold">
              {data.followers}
            </span>
          </div>
          <div className="w-1/3">
            <p className="text-xs opacity-70 mb-2">Following</p>
            <span className="text-xl font-mono font-bold">
              {data.following}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-sm flex-wrap">
          <div className="md:w-1/2 flex mb-6">
            <Location className="dark:text-white block mr-4" />
            <p className="whitespace-nowrap">{checkNull(data.location)}</p>
          </div>
          <div className="md:w-1/2 flex mb-6">
            <Twitter className="dark:text-white mr-3 md:ml-4" />
            <p className="whitespace-nowrap">
              {checkNull(data.twitter_username)}
            </p>
          </div>
          <div className="md:w-1/2 flex mb-6">
            <Website className="dark:text-white md:mr-3" />
            <p className="whitespace-nowrap">{checkNull(data.blog)}</p>
          </div>
          <div className="md:w-1/2 flex mb-6">
            <Company className="dark:text-white mr-3 md:ml-4" />
            <p className="whitespace-nowrap">{checkNull(data.company)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
