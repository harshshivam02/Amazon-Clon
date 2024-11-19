import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../Context/Cart';
import mockData from '../utils/Mockdata';
import AddedToCart from './AddedTocart';
import { MdLocationOn } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(cartContext);
  const [addedToCart, setAddedToCart] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const product = mockData.find(item => item.id === parseInt(id));
  
  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(`${product.name} added to cart!`);
  };

  const renderRatingStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="container mx-auto px-4 py-8 m-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left - Product Images */}
        <div className="lg:w-5/12">
          <div className="sticky top-24">
            <div className="flex gap-4">
              {/* Thumbnail Column */}
              <div className="flex flex-col gap-2 w-16">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="border p-1 hover:border-orange-400 cursor-pointer">
                    <img src={product.image} alt="" className="w-full object-contain" />
                  </div>
                ))}
              </div>
              {/* Main Image */}
              <div className="flex-1">
                <img src={product.image} alt={product.name} className="w-full h-[500px] object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle - Product Details */}
        <div className="lg:w-4/12">
          <h1 className="text-xl font-medium mb-2">{product.name}</h1>
          <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline text-sm">Visit the {product.category} Store</a>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400 text-sm">
              {renderRatingStars(product.rating)}
            </div>
            <a href="#reviews" className="text-blue-600 hover:text-orange-600 hover:underline text-sm">
              {product.rating} ({Math.floor(Math.random() * 1000)}) ratings
            </a>
          </div>

          <div className="border-t border-b py-2 my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-red-600 text-sm">-16%</span>
              <span className="text-xl">$</span>
              <span className="text-3xl">{product.price}</span>
              <span className="text-sm text-gray-500">M.R.P.: <strike>${Math.floor(product.price * 1.16)}</strike></span>
            </div>
            <p className="text-sm">Inclusive of all taxes</p>
          </div>

          {/* Offers Section */}
          <div className="my-4">
            <h3 className="font-medium mb-2">Offers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded p-3">
                <h4 className="font-medium">Bank Offer</h4>
                <p className="text-xs">Upto $1,750.00 discount on select Credit Cards</p>
                <a href="#" className="text-blue-600 text-xs hover:text-orange-600 hover:underline">29 offers ›</a>
              </div>
              <div className="border rounded p-3">
                <h4 className="font-medium">Partner Offers</h4>
                <p className="text-xs">Get GST invoice and save up to 28% on business purchases</p>
                <a href="#" className="text-blue-600 text-xs hover:text-orange-600 hover:underline">1 offer ›</a>
              </div>
            </div>
          </div>

          {/* Product Features */}
          <div className="my-4">
            <h3 className="font-medium mb-2">About this item</h3>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>2 Years Warranty from date of purchase</li>
              <li>Heavy Duty Digital Display</li>
              <li>Ultra Fast Inflation Technology</li>
              <li>Automatic Cut-off Feature</li>
              <li>LED Light for Night Usage</li>
            </ul>
          </div>
        </div>

        {/* Right - Buy Box */}
        <div className="lg:w-3/12">
          <div className="border rounded-lg p-4 sticky top-24">
            <div className="text-xl mb-2">${product.price}</div>
            <div className="text-blue-600 text-sm mb-2">FREE delivery</div>
            <div className="flex items-center gap-1 text-sm mb-4">
              <MdLocationOn className="text-gray-600" />
              <span>Deliver to Delhi 110001</span>
            </div>

            <div className="text-xl font-medium text-green-700 mb-4">In stock</div>

            <div className="mb-4">
              <label className="text-sm mb-1 block">Quantity:</label>
              <select 
                className="border rounded p-2 w-full"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              >
                {[1,2,3,4,5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full mb-2 text-sm"
            >
              Add to Cart
            </button>
            <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded-full mb-4 text-sm">
              Buy Now
            </button>

            <div className="text-sm border-t pt-4">
              <div className="flex justify-between mb-1">
                <span>Payment</span>
                <span>Secure transaction</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Ships from</span>
                <span>Amazon</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Sold by</span>
                <span>ResQTech India Pvt Ltd</span>
              </div>
            </div>

            <button className="w-full mt-4 border border-gray-300 rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <IoShareSocialOutline />
              Share
            </button>
          </div>
        </div>
      </div>
      {addedToCart && <AddedToCart message={addedToCart} />}
    </div>
  );
};

export default ProductDetails; 