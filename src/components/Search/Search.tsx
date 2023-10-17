import SearchIcon from "../../assets/icon-search.svg";
const Search = () => {
  return (
    <div className="relative flex items-center gap-3 p-[10px] pl-6 rounded-[15px] bg-cbg">
      <img src={SearchIcon} alt="" />
      <input
        className="bg-cbg flex-grow outline-none text-lg"
        type="text"
        placeholder="Search GitHub username..."
      />
      <button className="bg-accent text-title px-6 py-3 rounded-[8px] font-bold">
        Search
      </button>
    </div>
  );
};

export default Search;
