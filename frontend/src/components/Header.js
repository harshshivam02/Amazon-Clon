import { Link } from "react-router-dom";
import locationImg from "../assets/location.png";
import AmazonLogo from "../assets/Amazon-logo.jpg";
import SearchBar from "./SearchBar";
import { useContext, useState } from "react";
import { cartContext } from "../Context/Cart";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const { cartItems } = useContext(cartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0f1111] py-2 px-1 shadow-md w-full sticky m-0 ">
      <div className="flex items-center justify-between lg:justify-around w-full  ">
        <Link to="/">
          <img className="h-9 object-contain w-28 " src={AmazonLogo} alt="Amazon Logo" />
        </Link>

        <div className="hidden lg:flex items-center text-white space-x-2 cursor-pointer ml-4 w-2/12">
          <img className="w-6 h-6" src={locationImg} alt="Location" />
          <div>
            <p className="text-xs">Deliver to</p>
            <p className="text-sm font-bold">Roorkee 247667</p>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-auto xl:w-4/5 mx-4">
          <SearchBar />
        </div>

        <div className="flex items-center text-white space-x-4 lg:hidden">
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart className="text-white w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <FaBars className="text-white w-6 h-6 mr-4" />
          </button>
        </div>

        <ul className="hidden lg:flex items-center justify-end w-4/12 ml-auto text-white text-sm space-x-6">
          <li>
            <Link to="/profile" className="hover:text-gray-400">Your Account</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">Returns & Orders</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-400">Cart-{cartItems.length}</Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden mt-3 -ml-3">
        <SearchBar />
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 bg-[#232f3e] text-white sticky z-50 top-16  w-full p-4 h-40">
          <ul className="flex flex-col text-white space-y-4">
            <li>
              <Link to="/profile" className="hover:text-gray-400 block">Your Account</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400 block">Returns & Orders</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-400 block">Cart-{cartItems.length}</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
