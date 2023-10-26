import userAvater from "../../assets/user.png";
import locationIcon from "../../assets/icon-location.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import linkIcon from "../../assets/icon-url.svg";
import companyIcon from "../../assets/icon-company.svg";

type ResultProps = {
  userData: {
    avatar_url?: string;
    bio?: string;
    login?: string;
    name?: string;
    location?: string;
  };
};

const Result = ({ userData }: ResultProps) => {
  const { avatar_url, bio, login, name, location } = userData;
  return (
    <div className="p-8 rounded-[15px] bg-cbg">
      {Object.keys(userData).length === 0 ? (
        <div className="flex flex-col gap-5 items-center">
          <img className="h-32 w-32 rounded-full" src={userAvater} alt="" />
          <h1 className="text-2xl text-desc text-opacity-50">
            Search GitHub User
          </h1>
        </div>
      ) : (
        <div className="flex gap-5">
          <div className=" shrink-0">
            <img
              className=" w-24 h-24 object-cover rounded-full hidden sm:block"
              src={avatar_url ? avatar_url : userAvater}
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
                <p>Joined 25 Jan 2011</p>
              </div>
            </div>
            <p>{bio ? bio : "User has no bio"}</p>
            <div className="py-4 px-6 rounded-[12px] bg-abg flex justify-between text-center mt-5">
              <div>
                <p className="text-sm">Repos</p>
                <h3 className="font-bold">8</h3>
              </div>
              <div>
                <p className="text-sm">Followers</p>
                <h3 className="font-bold">3435</h3>
              </div>
              <div>
                <p className="text-sm">Following</p>
                <h3 className="font-bold">8</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-7">
              <div className="flex flex-col gap-5">
                <a className="flex items-center gap-2" href="">
                  {" "}
                  <img src={locationIcon} alt="" />
                  <span>{location ? location : "Not Available"}</span>
                </a>
                <a className="flex items-center gap-2" href="">
                  {" "}
                  <img src={linkIcon} alt="" />
                  <span>San Fransisco</span>
                </a>
              </div>
              <div className="flex flex-col gap-5">
                <a className="flex items-center gap-2" href="">
                  {" "}
                  <img src={twitterIcon} alt="" />
                  <span>San Fransisco</span>
                </a>
                <a className="flex items-center gap-2" href="">
                  {" "}
                  <img src={companyIcon} alt="" />
                  <span>San Fransisco</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
