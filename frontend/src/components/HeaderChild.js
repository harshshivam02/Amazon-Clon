import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Header_child = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`bg-[#232f3e] h-[39px] w-full fixed ${isMobile ? 'top-[112px]' : 'top-[60px]'} z-40`}>
      <div className="text-white flex items-center text-sm font-bold h-full px-2 max-w-[1500px] mx-auto">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="px-2 hover:text-yellow-200 flex items-center gap-1"
        >
          <RxHamburgerMenu size={20} />
          <span>All</span>
        </button>

        <ul className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap px-2">
         
          <li>
            <Link to="/health" className="hover:underline hover:text-yellow-200 ">
              Health, Household & Personal Care
            </Link>
          </li> 
          <li>
            <Link to="/mxplayer" className="hover:underline hover:text-yellow-200 ">MX Player</Link>
          </li>
          <li>
            <Link to="/sell" className="hover:underline hover:text-yellow-200 ">Sell</Link>
          </li>
          <li>
            <Link to="/buyagain" className="hover:underline hover:text-yellow-200 ">Buy Again</Link>
          </li>
          <li>
            <Link to="/giftcards" className="hover:underline hover:text-yellow-200 ">Gift Cards</Link>
          </li>
          <li>
            <Link to="/books" className="hover:underline hover:text-yellow-200 ">Books</Link>
          </li>
          <li>
            <Link to="/browsing-history" className="hover:underline hover:text-yellow-200 ">Browsing History</Link>
          </li>
          <li>
            <Link to="/gift-ideas" className="hover:underline hover:text-yellow-200 ">Gift Ideas</Link>
          </li>
          <li>
            <Link to="/amazon-pay" className="hover:underline hover:text-yellow-200 ">Amazon Pay</Link>
          </li>
          <li>
            <Link  className="hover:underline hover:text-yellow-200 ">AmazonBasics</Link>
          </li>
        </ul>

        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
      </div>
    </div>
  );
};

export default Header_child;
