import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <FaBell className="text-2xl cursor-pointer text-gray-600" />

        <FaUserCircle className="text-4xl text-blue-600 cursor-pointer" />
      </div>
    </header>
  );
}

export default Navbar;