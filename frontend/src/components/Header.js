import { Link } from "react-router-dom";
import locationImg from "../assets/location.png";
import AmazonLogo from "../assets/Amazon-logo.png";
import SearchBar from "./SearchBar";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../Context/Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { cartItems } = useContext(cartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="bg-[#131921] w-full fixed top-0 z-10">
        {/* Main Header */}
        <div className="flex items-center h-[60px] px-2 gap-1 mx-auto max-w-[1500px]">
          {/* Logo - Updated padding and hover effect */}
          <Link to="/" className="flex items-center py-2 px-4 border border-transparent hover:border-white duration-100">
            <img className="h-8 mt-1" src={AmazonLogo} alt="Amazon Logo" />
            <span className="text-xs text-white">.in</span>
          </Link>

          {/* Delivery Location - Updated text sizes and spacing */}
          <div className="hidden md:flex items-center text-white px-2 py-2 border border-transparent hover:border-white cursor-pointer">
            <img className="w-6 h-6" src={locationImg} alt="Location" />
            <div className="ml-0.5">
              <p className="text-xs text-gray-300 leading-3">Deliver to Harsh</p>
              <p className="text-sm font-bold">Roorkee 247667</p>
            </div>
          </div>

          {/* Search Bar Container - Added better spacing */}
          <div className="hidden md:flex flex-grow ">
            <SearchBar />
          </div>

          {/* Right Section - Updated spacing and hover effects */}
          <div className="flex items-center gap-1">
            {/* Language Selector - Updated styling */}
            <div className="hidden md:flex items-center px-2 py-2 border border-transparent hover:border-white cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="Language" className="w-6 h-4" />
              <span className="text-white text-sm font-medium">EN</span>
              <MdArrowDropDown className="text-gray-200" size={20} />
            </div>

            {/* Account & Lists - Updated text styling */}
            <div className="hidden md:block text-white px-2 py-2 border border-transparent hover:border-white cursor-pointer">
            <Link to="/signin">
              <p className="text-xs leading-3">Hello, Sign in</p>
              <div className="flex items-center">
                <p className="text-sm font-bold whitespace-nowrap">Account & Lists</p>
                <MdArrowDropDown size={20} />
              </div>
              </Link>
            </div>

            {/* Returns & Orders - Updated spacing */}
            <div className="hidden lg:block text-white px-2 py-2 border border-transparent hover:border-white cursor-pointer">
              <p className="text-xs leading-3">Returns</p>
              <p className="text-sm font-bold">& Orders</p>
            </div>

            {/* Cart - Updated styling */}
            <Link 
              to="/cart" 
              className="flex items-center text-white px-2 py-2 border border-transparent hover:border-white"
            >
              <div className="relative">
                <AiOutlineShoppingCart size={32} />
                <span className="absolute -top-1 right-0 bg-orange-400 text-black font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <span className="hidden lg:block font-bold ml-1">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Updated background and padding */}
        {window.innerWidth < 1024 && (
          <div className="lg:hidden p-2.5 bg-[#232f3e]">
            <SearchBar />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
