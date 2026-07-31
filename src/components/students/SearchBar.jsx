import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex justify-between items-center mb-6">

      <input
        type="text"
        placeholder="Search student..."
        className="w-80 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
        <FaSearch />
        Search
      </button>

    </div>
  );
}

export default SearchBar;