
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar=()=>{
    const [searchText, setsearchText] = useState("");
    const [searchOption, setsearchOption] = useState("");
    const handleSearch = (e) => {
        setsearchText(e.target.value);
      };
    
      const getoption = (e) => {
        setsearchOption(e.target.value);
      };
    
      const navigate = useNavigate();
      const performSearch = () => {
        navigate(`/search?query=${searchText}&category=${searchOption}`);
      };
return(
<div className="flex items-center w-8/12 sm:w-4/5 ml-6">
          <select  
          onChange={getoption}
          id="select"className="h-10 bg-gray-200 text-gray-800 text-sm rounded-l-md px-2 border-r border-gray-400 w-[70px]">
            <option value="ALL"  >
              All
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
            <option value="Kitchen Appliances">Kitchen Appliances</option>
            <option value="Video Games">Video Games</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Health & Fitness">Health and Fitness</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            minLength="50"
            className="flex-grow h-10 px-4 border border-gray-400 rounded-r-none focus:outline-none lg:w-full "
            onChange={(e)=>{
              handleSearch(e);
            }}
          />
          <button className="h-10 w-15 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md flex items-center justify-center "
          onClick={performSearch}>
           <span className="p-4">search</span>

          </button>
        </div>

);
};
export default SearchBar;