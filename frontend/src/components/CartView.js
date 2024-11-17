import {cartContext} from "../Context/Cart";
import { useState,useContext } from "react";
import CartList from "./CartList";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


const CartView=()=>{
    const{cartItems,updateQuantity,getCartTotal} = useContext(cartContext);
    const [isEmiOpen, setIsEmiOpen] = useState(false);
    
    // Helper function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
        }
        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
        }
        return stars;
    };

    // Sample recommended products data
    const recommendedProducts = [
        {
            id: 1,
            name: "Apple 20W USB-C Power Adapter",
            rating: 4.5,
            reviews: 1709,
            price: 1549.00,
            image: "https://m.media-amazon.com/images/I/51EABH5pm7L._SX522_.jpg"
        },
        {
            id: 2,
            name: "Apple MacBook Air Laptop: Apple M1 chip",
            rating: 4.5,
            reviews: 4457,
            price: 62990.00,
            image: "https://m.media-amazon.com/images/I/71duqJdFGOL._SX679_.jpg"
        },
        {
            id: 3,
            name: "Mother Dairy Dailycious Rich & Creamy Dairy Whitener",
            rating: 4.5,
            reviews: 6084,
            price: 445.00,
            image: "https://m.media-amazon.com/images/I/61fBnxJiiTL._SY466_.jpg"
        },
        {
            id: 4,
            name: "Amozo Ultra Hybrid Camera and Drop Protection Cover",
            rating: 4,
            reviews: 5198,
            price: 249.00,
            image: "https://m.media-amazon.com/images/I/41cYSMom9TL._SX300_SY300_QL70_FMwebp_.jpg"
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8 justify-between mt-[75px]"> 
            {/* Left side - Cart Items */}
            <div className="lg:w-8/12">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl">Shopping Cart</h1>
                    <span className="text-right">Price</span>
                </div>
                <div className="border-t border-gray-200">
                    {cartItems.map((item) => (
                        <div key={item.id} className="py-4 border-b border-gray-200">
                            <div className="flex gap-4">
                                <input type="checkbox" className="mt-4" />
                                <img src={item.image} alt={item.name} className="w-32 h-32 object-contain" />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-medium">{item.name}</h2>
                                    <div className="text-sm text-green-700 mt-1">In stock</div>
                                    <div className="text-sm mt-1">Eligible for FREE Shipping</div>
                                    
                                    {/* Updated Item Controls with Yellow Border */}
                                    <div className="flex items-center gap-4 mt-2">
                                        <div className="flex items-center border-2 border-yellow-400 rounded-lg overflow-hidden">
                                            <button 
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="px-3 py-1 hover:bg-yellow-50 active:bg-yellow-100 transition-colors border-r border-yellow-400"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 border-r border-yellow-400 bg-white">
                                                {item.quantity}
                                            </span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="px-3 py-1 hover:bg-yellow-50 active:bg-yellow-100 transition-colors border-l border-yellow-400"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-800 hover:underline">Delete</button>
                                        <button className="text-blue-600 hover:text-blue-800 hover:underline">Save for later</button>
                                        <button className="text-blue-600 hover:text-blue-800 hover:underline">See more like this</button>
                                        <button className="text-blue-600 hover:text-blue-800 hover:underline">Share</button>
                                    </div>
                                </div>
                                <div className="text-lg font-medium">₹{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-right text-lg mt-4">
                    Subtotal ({cartItems.length} items): <span className="font-bold">₹{getCartTotal()}</span>
                </div>
            </div>

            {/* Right side - Order Summary */}
            <div className="lg:w-3/12">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    {/* Delivery Progress Bar */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="relative w-full h-2 bg-teal-100 rounded-full">
                                <div className="absolute left-0 top-0 h-2 bg-teal-600 rounded-full w-[100%]"></div>
                            </div>
                            <span className="text-teal-600">₹499</span>
                        </div>
                        <div className="flex gap-2 items-start">
                            <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                                <p className="text-teal-600 text-xs">Your order is eligible for FREE Delivery.</p>
                                <p className="text-xs text-gray-600">Choose <a href="abc" className="text-blue-600 hover:text-blue-800 hover:underline">FREE Delivery</a> option at checkout.</p>
                            </div>
                        </div>
                    </div>

                    {/* Updated Order Summary */}
                    <div className="space-y-4">
                        <div className="text-lg">
                            Subtotal ({cartItems.length} items): <span className="font-bold">₹{getCartTotal()}</span>
                        </div>
                        
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span>This order contains a gift</span>
                        </label>

                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 py-2 rounded-lg text-sm font-medium transition-colors">
                            Proceed to Buy
                        </button>

                        {/* Updated EMI Option */}
                        <div className="border-[1px]  border-gray-400 rounded-lg   transition-colors">
                            <button 
                                onClick={() => setIsEmiOpen(!isEmiOpen)}
                                className={`w-full p-3 flex justify-between items-center ${isEmiOpen ? 'border-blue-400 border-[3px] rounded-lg p-2' : ''}`}
                            >
                                <span className="font-medium">EMI Available</span>
                                <svg 
                                    className={`w-4 h-4 transition-transform ${isEmiOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isEmiOpen && (
                                <div className="p-3 text-sm">
                                    <p>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards)</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block">Learn more</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Pair with your cart section */}
                <div className="mt-6 border rounded-lg p-4">
                    <h2 className="text-lg font-medium mb-4">Pair with your cart</h2>
                    <div className="space-y-4">
                        {recommendedProducts.map((product) => (
                            <div key={product.id} className="flex gap-4 py-3 border-b last:border-b-0">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-20 h-20 object-contain"
                                />
                                <div className="flex-grow">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline line-clamp-2">
                                        {product.name}
                                    </a>
                                    <div className="flex items-center gap-1 mt-1">
                                        <div className="flex">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="text-blue-600 text-sm">
                                            {product.reviews.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-sm">₹</span>
                                        <span className="text-lg font-medium">{product.price.toFixed(2)}</span>
                                    </div>
                                    <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-full text-sm font-medium">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartView;