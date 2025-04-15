import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../redux/inputValueSlice";

function SearchBar() {
  const inputValue = useSelector((state) => state.inputValue.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <div className="flex justify-center  ">
      <input
        className=" w-20 sm:w-32  h-5 sm:h-8  rounded-l-lg pl-2  placeholder:text-[8px]  text-[8px]   bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-1 ring-blue-500 "
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button className="h-5 sm:h-8    bg-green-600 rounded-r-lg px-2 py-2 md:px-4 md:py-2 hover:bg-green-700 cursor-pointer ">
        <MagnifyingGlassIcon className="h-2 w-2 sm:h-5 sm:w-5 text-white" />
      </button>
    </div>
  );
}

export default SearchBar;
