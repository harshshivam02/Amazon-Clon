import { BiSearch } from 'react-icons/bi';
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
<div className="flex flex-grow max-w-[800px] items-center group focus-within:ring-2 focus-within:ring-[#ff9900] rounded-md">
          <select  
          onChange={getoption}
          id="select"className="h-[40px] bg-[#f3f3f3] hover:bg-[#dadada] text-[#0F1111] text-sm rounded-l-md px-2 border-r border-[#cdcdcd] w-[60px] cursor-pointer focus:outline-none">
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
            className="flex-grow h-[40px] px-4 border-y border-[#cdcdcd] focus:outline-none"
            onChange={(e)=>{
              handleSearch(e);
            }}
          />
          <button className="h-[40px] w-[45px] bg-[#febd69] hover:bg-[#f3a847] rounded-r-md flex items-center justify-center transition-colors border-y border-r border-[#cdcdcd]"
          onClick={performSearch}>
            <BiSearch size={22} className="text-[#333333]"/>
          </button>
        </div>

);
};
export default SearchBar;