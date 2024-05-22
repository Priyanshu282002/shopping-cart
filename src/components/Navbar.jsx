import { FaShoppingCart } from "react-icons/fa";
import logo from "./logo.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart}=useSelector((state)=>state);
  return(
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
            <img className=" h-14" src={logo}/>
          </div>
        </NavLink>
        
        <div className="flex text-slate-100 font-medium items-center mr-5 space-x-6">
          <NavLink to="/">
            <p className="hover:text-green-600 transition duration-300 ease-in">Home</p>
          </NavLink>
          
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:text-green-600 transition duration-300 ease-in"/>
              {
                cart.length > 0 &&
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
            </div>
          </NavLink>



          
          
        </div>
      </nav>
    </div>
    
  )
};

export default Navbar;
