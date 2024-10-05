import { Link } from "react-router-dom";
import locationImg from "../assets/location.png";
import AmazonLogo from "../assets/Amazon-logo.jpg";
import search from "../assets/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../Context/Cart";


const Header = () => {
  const  [searchText,setsearchText] = useState("");
  const [searchOption,setsearchOption] = useState("");
  const {cartItems}=useContext(cartContext);
  const handleSearch = (e) => {
    setsearchText(e.target.value);
     console.log(e.target.value);
  };
  const getoption = (e) => { 
    setsearchOption(e.target.value); 
    console.log(e.target.value);
 }
  const navigate = useNavigate();
  const performSearch=()=>{
    navigate(`/search?query=${searchText}&category=${searchOption}`)
  }
  return (
    <header className="flex items-center h-16 bg-[#0f1111] px-4 shadow-md">
      <Link to="/"><img
        className="h-10 object-contain w-28"
        src={AmazonLogo}
        alt="Amazon Logo"
      />
      </Link>

      <ul className="flex items-center justify-between flex-1 ml-4">
        <li className="flex items-center text-white space-x-2 cursor-pointer">
          <img className="w-6 h-6" src={locationImg} alt="Location" />
          <div>
            <p className="text-xs">Deliver to</p>
            <p className="text-sm font-bold">Roorkee 247667</p>
          </div>
        </li>

        <li className="flex items-center w-3/5">
          <select  
          onChange={getoption}
          id="select"className="h-10 bg-gray-200 text-gray-800 text-sm rounded-l-md px-2 border-r border-gray-400">
            <option value="ALL"  hidden>
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
            className="flex-grow h-10 px-4 border border-gray-400 rounded-r-none focus:outline-none"
            onChange={(e)=>{
              handleSearch(e);
            }}
          />
          <button className="h-10 w-12 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md flex items-center justify-center"
          onClick={performSearch}>
            <img className="w-5 h-5" src={search} alt="Search" />

          </button>
        </li>

        <li className="flex items-center space-x-6 text-white text-sm">
          <Link to="/profile" className="object-contain  shadow-md">
            <svg
              width="40px"
              height="40px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e8e8e8"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  opacity="0.5"
                  cx="12"
                  cy="9"
                  r="3"
                  stroke="#f7f9fc"
                  strokeWidth="1.416"
                ></circle>{" "}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#f7f9fc"
                  strokeWidth="1.416"
                ></circle>{" "}
                <path
                  opacity="0.5"
                  d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                  stroke="#f7f9fc"
                  strokeWidth="1.416"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </Link>
          <Link to="/" className="hover:text-gray-400">
            Returns & Orders
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            Cart-{cartItems.length}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
