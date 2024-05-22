import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=>state);

  const [totalAmount,setTotalAmount]=useState(0);

  useEffect( () => {
    setTotalAmount(  cart.reduce((acc,curr)=> acc+curr.price,0));
  },[cart])
  return(
    <div>
      {
        cart.length>0?
        (<div className="flex justify-center items-center gap-16">
          <div>
            {
              cart.map((item,index) =>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-green-800 text-xl font-semibold uppercase">Your Cart</div>
              
              <div className="text-green-700 text-5xl font-semibold uppercase">
                Summary
              </div>

              <p>
                <span className=" text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className=" text-gray-700 font-semibold text-xl">Total Amount:<span className=" text-black font-bold ">${totalAmount.toFixed(2)}</span> </p>
              <button className="bg-green-600 text-white rounded-lg uppercase font-semibold p-3 px-10 mt-5 border-2 border-green-600 hover:bg-purple-50 hover:text-green-600 transition duration-300 ease-in tracking-wider">
                Checkout Now
              </button>
            </div>
          </div>
        </div>):
        (
          <div className="flex flex-col justify-center items-center min-h-[80vh]">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
            <Link to="/">
              <button className="bg-green-800 text-white rounded-lg  font-semibold p-3 px-10 mt-5 border-2 border-green-600 hover:bg-purple-50 hover:text-green-600 transition duration-300 ease-in tracking-wider">
                Shop Now
              </button>
            </Link>
          </div>
        )

      }
    </div>
  );
};

export default Cart;
