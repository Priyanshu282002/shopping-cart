import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
  <div className="flex mt-10 gap-16 border-b-2 border-black pb-10">
    <div className="h-[200px] w-[50%]">
      <img src={item.image} className="h-full w-full"/>
    </div>
    <div className="flex flex-col gap-5 max-w-[60vh]">
      <h1 className=" text-gray-700 font-semibold text-xl">{item.title}</h1>
      <h1>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
      <div className="flex justify-between">
        <p className="text-green-600 font-bold font-lg">${item.price}</p>
        <div onClick={removeFromCart} className="bg-red-200 group rounded-full p-3 mr-3 cursor-pointer hover:bg-red-400">
          <MdDelete className="text-red-800 group-hover:text-white"/>
        </div>
      </div>
    </div>
    
  </div>) ;
};

export default CartItem;
