import userAvater from "../../assets/user.png";
const Result = () => {
  return (
    <div className="p-8 rounded-[15px] bg-cbg">
      <div className="flex gap-5 mb-7">
        <img
          className=" w-24 h-24 object-cover rounded-full"
          src={userAvater}
          alt="img"
        />
        <div className="flex flex-col flex-grow gap-2 sm:flex-row sm:justify-between">
          <div>
            <h2 className="font-bold text-2xl">Shazidul Islam</h2>
            <p className=" text-accent">@octocat</p>
          </div>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo
        maxime modi atque, quasi nam!
      </p>
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
    </div>
  );
};

export default Result;
