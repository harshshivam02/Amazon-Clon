import {cartContext} from "../Context/Cart";
import { useState,useContext } from "react";
import CartList from "./CartList";

const CartView=()=>{
    const{cartItems,emptyCart,getCartTotal} = useContext(cartContext);
    console.log(cartItems)
    return (
        <div className="relative"> 
            <div className="flex justify-between mx-28">
            <h1 className="font-semibold text-3xl m-5">Shopping Cart</h1>
            <button onClick={()=>{emptyCart()}} className="bg-orange-500 h-10 my-auto hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded">Clear Cart</button>
            </div>
            
            {/* Add CartView components here */}
            {
                 (
                    cartItems.map((item) => (
                        <div className="m-1">
                        <CartList data={item}/>
                       </div>
                    ))
                )

            }
          <div className="flex  justify-between w-6/12 mx-auto p-4">
          <div className="flex justify-end  flex-col">
            <h2 className="text-gray-600 font-semibold text-2xl m-4">Total: ${getCartTotal()}</h2>
            <button className="bg-orange-500 h-10 my-auto hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded">Checkout</button>
            </div>
                <a href="/products" className="text-orange-500 hover:text-orange-700 my-auto">Continue Shopping</a>
             
                
          

          
          </div>

        </div>
    )
}

export default CartView;