import { cartContext } from "../Context/Cart";
import AddedToCart from "./AddedTocart";
import { useState, useContext, useEffect } from "react";

const ItemCard = ({ data }) => {
  const { addToCart } = useContext(cartContext);
  const [addedToCart, setAddedToCart] = useState("");

  const { name, image, description, price, rating, category } = data || {};

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => {
        setAddedToCart("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  return (
    <div className="bg-white flex flex-col p-4 border border-gray-200 shadow-md ">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-contain mb-2"
      />
      <h3 className="text-base font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-3">{description}</p>
      <div className="text-xs text-gray-500 mb-2">{category}</div>
      <div className="flex justify-between items-center w-full mb-2">
        <span className="text-lg font-bold text-gray-800">${price}</span>
        <span className="text-yellow-500 text-sm font-medium">{rating} ⭐</span>
      </div>
      <button
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-150 ease-in-out w-full"
        onClick={() => {
          addToCart(data);
          setAddedToCart(`${name} added to the cart!`);
        }}
      >
        Add to Cart
      </button>
      {addedToCart && <AddedToCart message={addedToCart} />}
    </div>
  );
};

export default ItemCard;
