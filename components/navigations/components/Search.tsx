type InputProps = {
  theme?: "light" | "dark";
};
const Search = ({ theme = "dark" }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search-input"
        className={`w-full px-4 py-3 ${
          theme === "dark" ? "bg-gray-3" : "bg-light"
        }  rounded-md focus:ring-1 focus:ring-gray-2 ring-1 ring-gray-2 outline-none placeholder:text-gray-2`}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
