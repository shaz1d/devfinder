import SearchIcon from "../../assets/icon-search.svg";

type SearchProps = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setUserData: React.Dispatch<React.SetStateAction<object>>;
  getUserData: () => Promise<void>;
};
const Search = ({ state, setState, getUserData, setUserData }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
    if (value.length === 0) {
      setUserData({});
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUserData();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center gap-3 p-[10px] pl-6 rounded-[15px] bg-cbg shadow-lg"
    >
      <img src={SearchIcon} alt="" />
      <input
        className="bg-cbg w-full outline-none text-lg"
        type="text"
        placeholder="Search GitHub username..."
        value={state}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-accent text-[white] px-6 py-3 rounded-[8px] font-bold"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
