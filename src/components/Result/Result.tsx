import userAvater from "../../assets/user.png";
import { Loader, Company, Location, GitLink, Twitter } from "../Icons";

type ResultProps = {
  userData: {
    avatar_url?: string;
    bio?: string;
    login?: string;
    name?: string;
    location?: string;
    created_at?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    tweitter_username?: string;
    company?: string;
    html_url?: string;
    message?: string;
  };
  isLoading: boolean;
};

const Result = ({ userData, isLoading }: ResultProps) => {
  const {
    avatar_url,
    bio,
    login,
    name,
    location,
    created_at,
    public_repos,
    followers,
    following,
    tweitter_username,
    company,
    html_url,
    message,
  } = userData;
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  console.log(message);
  return (
    <div className="p-8 rounded-[15px] bg-cbg shadow-lg">
      {isLoading ? (
        <div className="">
          <Loader></Loader>
        </div>
      ) : Object.keys(userData).length === 0 ? (
        <div className="flex flex-col gap-5 items-center ">
          <img className="h-32 w-32 rounded-full" src={userAvater} alt="" />
          <h1 className="text-2xl text-desc text-opacity-50">
            Search GitHub User
          </h1>
        </div>
      ) : message === "Not Found" ? (
        <div className="flex flex-col gap-5 items-center ">
          <img className="h-32 w-32 rounded-full" src={userAvater} alt="" />
          <h1 className="text-2xl text-desc text-opacity-50">User Not Found</h1>
        </div>
      ) : (
        <div className="flex gap-5 ">
          <div className="shrink-0">
            <img
              className="w-24 h-24 object-cover rounded-full hidden sm:block"
              src={avatar_url}
              alt="img"
            />
          </div>
          <div>
            <div className="flex gap-5 mb-6">
              <img
                className=" w-24 h-24 object-cover rounded-full sm:hidden"
                src={userAvater}
                alt="img"
              />
              <div className="flex flex-col flex-grow gap-2 sm:flex-row sm:justify-between">
                <div>
                  <h2 className="font-bold text-2xl">{name}</h2>
                  <p className=" text-accent">@{login}</p>
                </div>
                <p>Joined {created_at && formatDate(created_at)}</p>
              </div>
            </div>
            <p>
              {login === "pipspritam"
                ? "Fuck You Bitch!"
                : bio
                ? bio
                : "User has no bio"}
            </p>
            <div className="py-4 px-6 rounded-[12px] bg-abg flex justify-between text-center mt-5">
              <div>
                <p className="text-sm">Repos</p>
                <h3 className="font-bold">{public_repos}</h3>
              </div>
              <div>
                <p className="text-sm">Followers</p>
                <h3 className="font-bold">{followers}</h3>
              </div>
              <div>
                <p className="text-sm">Following</p>
                <h3 className="font-bold">{following}</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 justify-between mt-7">
              <div className="flex flex-col gap-5">
                <div
                  className={`flex items-center gap-3 text-sm ${
                    location ? "text-title fill-title" : "text-desc fill-desc"
                  }`}
                >
                  {" "}
                  <Location />
                  <span>{location ? location : "Not Available"}</span>
                </div>
                <a
                  className={`flex items-center gap-3 text-sm ${
                    html_url ? "text-title fill-title" : "text-desc fill-desc"
                  }`}
                  target="_blank"
                  href={html_url}
                >
                  {" "}
                  <GitLink />
                  <span>{html_url}</span>
                </a>
              </div>
              <div className="flex flex-col gap-5">
                <a
                  className={`flex items-center gap-3 text-sm ${
                    tweitter_username
                      ? "text-title fill-title"
                      : "text-desc fill-desc"
                  }`}
                  href=""
                >
                  {" "}
                  <Twitter />
                  <span>
                    {tweitter_username ? tweitter_username : "Not Available"}
                  </span>
                </a>
                <div
                  className={`flex items-center gap-3 text-sm ${
                    company ? "text-title fill-title" : "text-desc fill-desc"
                  }`}
                >
                  {" "}
                  <Company />
                  <span>{company ? company : "Not Available"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
