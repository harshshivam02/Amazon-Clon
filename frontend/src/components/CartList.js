import { cartContext } from "../Context/Cart";
import { useContext } from "react";

const CartList = ({ data }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(cartContext);
  const { id, name, image, description, price } = data || {};

  // Find the current item in the cart to display its quantity
  const cartItem = cartItems.find(item => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="w-8/12 h-52 mx-auto p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-row justify-between">
      <div className="float-end w-3/12">
        <div className="relative mb-4 md:mb-0 md:mr-4">
          <img
            className="w-full h-36 object-cover rounded-md"
            src={image}
            alt={name}
          />
        </div>

        {/* Quantity Controls */}
        <div className="relative flex items-center justify-between w-full md:w-auto">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
            onClick={() => removeFromCart(data)}
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
                d="M 3 12 L 21 12 L 21 10 L 3 10 Z" // Minus icon
              ></path>
            </svg>
          </button>

          {/* Quantity Display */}
          <span className="font-medium text-lg mx-4">{quantity}</span>

          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
            onClick={() => addToCart(data)}
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
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-6/12">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <h4 className="text-lg font-bold text-orange-500 mb-1">$ {price}</h4>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default CartList;
