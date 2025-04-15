import { Link, NavLink } from "react-router";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="bg-blue-950 py-3 sm:px-16 sm:py-7 flex flex-row items-center justify-around gap-1 sm:gap-0">
      <Link to="/">
        <h1 className="text-green-500 uppercase font-black text-[10px] sm:text-[16px]">
          favflicks
        </h1>
      </Link>
      <SearchBar />
      <NavLink
        className={({ isActive }) =>
          `text-lg ${isActive ? "text-green-500 text-[10px] sm:text-[16px]" : "text-gray-300 text-[10px] sm:text-[16px]"}`
        }
        to="/favorite"
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Navbar;
