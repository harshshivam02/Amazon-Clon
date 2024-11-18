import { cartContext } from "../Context/Cart";
import AddedToCart from "./AddedTocart";
import { useState, useContext, useEffect } from "react";

const ItemCard = ({ data }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(cartContext);
  const [addedToCart, setAddedToCart] = useState("");
  const [showAddToCart, setShowAddToCart] = useState(true);

  const { name, image, description, price, rating, category } = data || {};

  // Check if item exists in cart and get its quantity
  const cartItem = cartItems.find(item => item.id === data.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Update showAddToCart based on quantity
  useEffect(() => {
    setShowAddToCart(quantity === 0);
  }, [quantity]);

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => {
        setAddedToCart("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  const handleRemove = () => {
    removeFromCart(data);
    setAddedToCart(`${name} removed from cart!`);
  };

  return (
    <div className="bg-white flex flex-col p-3 md:p-4 border border-gray-200 shadow-md h-full">
      <img
        src={image}
        alt={name}
        className="w-full h-48 md:h-64 object-contain mb-2"
      />
      <h3 className="text-sm md:text-base font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-3">{description}</p>
      <div className="text-xs text-gray-500 mb-2">{category}</div>
      <div className="flex justify-between items-center w-full mb-2">
        <span className="text-base md:text-lg font-bold text-gray-800">${price}</span>
        <span className="text-yellow-500 text-xs md:text-sm font-medium">{rating} ⭐</span>
      </div>

      {showAddToCart ? (
        // Show Add to Cart button
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-150 ease-in-out w-full"
          onClick={() => {
            addToCart(data);
            setAddedToCart(`${name} added to the cart!`);
          }}
        >
          Add to Cart
        </button>
      ) : (
        // Show quantity controls
        <div className="flex items-center justify-center gap-2 bg-yellow-500 p-2 rounded-lg">
          <button
            onClick={handleRemove}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M 3 12 L 21 12 L 21 10 L 3 10 Z"
              />
            </svg>
          </button>

          <span className="font-medium text-lg mx-4">{quantity}</span>

          <button
            onClick={() => {
              addToCart(data);
              setAddedToCart(`${name} added to cart!`);
            }}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
              />
            </svg>
          </button>
        </div>
      )}

      {addedToCart && <AddedToCart message={addedToCart} />}
    </div>
  );
};

export default ItemCard;
