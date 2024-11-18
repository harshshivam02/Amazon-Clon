import { Link } from "react-router-dom";
import locationImg from "../assets/location.png";
import AmazonLogo from "../assets/Amazon-logo.png";
import SearchBar from "./SearchBar";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../Context/Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const { cartItems } = useContext(cartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('large'); // 'small', 'medium', 'large'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('small');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenSize === 'small';
  const isMedium = screenSize === 'medium';

  return (
    <>
      <header className="bg-[#131921] w-full fixed top-0 z-50">
        {/* Main Header */}
        <div className="flex items-center justify-between h-[60px] px-4 mx-auto max-w-[1500px]">
          {/* Left Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/" className="flex items-center py-2 border border-transparent hover:border-white duration-100">
              <img className="h-6 md:h-8 mt-1" src={AmazonLogo} alt="Amazon Logo" />
              <span className="text-xs text-white">.in</span>
            </Link>

            <div className="hidden md:flex items-center text-white px-2 py-2 border border-transparent hover:border-white cursor-pointer">
              <img className="w-6 h-6" src={locationImg} alt="Location" />
              <div className="ml-0.5">
                <p className="text-xs text-gray-300 leading-3">Deliver to Harsh</p>
                <p className="text-sm font-bold">Roorkee 247667</p>
              </div>
            </div>
          </div>

          {/* Search Bar Container */}
          <div className="hidden md:flex flex-grow max-w-2xl mx-4">
            <SearchBar />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Menu Button for Mobile and Medium Devices */}
            {(isMobile || isMedium) && (
              <button 
                className="text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <RxHamburgerMenu size={24} />
              </button>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center px-2 py-2 border border-transparent hover:border-white cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="Language" className="w-6 h-4" />
                <span className="text-white text-sm font-medium">EN</span>
                <MdArrowDropDown className="text-gray-200" size={20} />
              </div>

              <Link to="/signin" className="text-white px-2 py-2 border border-transparent hover:border-white">
                <p className="text-xs leading-3">Hello, Sign in</p>
                <div className="flex items-center">
                  <p className="text-sm font-bold">Account & Lists</p>
                  <MdArrowDropDown size={20} />
                </div>
              </Link>

              <div className="text-white px-2 py-2 border border-transparent hover:border-white cursor-pointer">
                <p className="text-xs leading-3">Returns</p>
                <p className="text-sm font-bold">& Orders</p>
              </div>
            </div>

            <Link to="/cart" className="flex items-center text-white px-2 py-2 border border-transparent hover:border-white">
              <div className="relative">
                <AiOutlineShoppingCart size={28} />
                <span className="absolute -top-1 right-0 bg-orange-400 text-black font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <span className="hidden lg:block font-bold ml-1">Cart</span>
            </Link>
          </div>
        </div>

        {/* Search Bar for Mobile */}
        {isMobile && (
          <div className="p-2 bg-[#232f3e] border-t border-gray-700">
            <SearchBar />
          </div>
        )}

        {/* Responsive Menu for Mobile and Medium Devices */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute ${isMobile ? 'top-[112px]' : 'top-[60px]'} left-0 right-0 bg-[#232f3e] text-white z-50 border-t border-gray-700`}>
            {/* Language Selector */}
            <div className="flex items-center px-4 py-3 border-b border-gray-700">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="Language" className="w-6 h-4" />
              <span className="text-sm font-medium ml-2">EN</span>
            </div>
            
            {/* Sign In */}
            <Link to="/signin" className="block px-4 py-3 border-b border-gray-700">
              <p className="text-sm font-bold">Sign In</p>
              <p className="text-xs text-gray-300">View your account</p>
            </Link>
            
            {/* Returns & Orders */}
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-sm font-bold">Returns & Orders</p>
              <p className="text-xs text-gray-300">Track or return items</p>
            </div>

            {/* Prime */}
            <div className="px-4 py-3">
              <p className="text-sm font-bold">Your Prime</p>
              <p className="text-xs text-gray-300">View benefits</p>
            </div>
          </div>
        )}
      </header>

      {/* Overlay for mobile/medium menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Spacer */}
      <div className={`${isMobile ? 'h-[112px]' : 'h-[60px]'}`} />
    </>
  );
};

export default Header;
