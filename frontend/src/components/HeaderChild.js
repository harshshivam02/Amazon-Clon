import { Link } from "react-router-dom";

const Header_child = () => {
  return (
    <div className="bg-[#312e46] h-9 sm:scroll-smooth w-full z-50">
      <ul className="text-white flex justify-between items-center text-sm font-bold px-4 space-x-4 h-full overflow-x-auto whitespace-nowrap">
        <li>
          <Link to="/" className="hover:underline hover:text-yellow-200 ">All</Link>
        </li>
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
          <Link to="/amazon-basics" className="hover:underline hover:text-yellow-200 ">AmazonBasics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header_child;
