import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useStore } from "../store/productStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div className="w-full py-4 bg-white flex justify-between items-center px-32">
      <Link className="logo" to="/">
        <h1 className="p-4 border-2 border-black tracking-wider">SHOPMAX</h1>
      </Link>
      <ul className="flex items-center gap-8">
        <li className="drop text-primary cursor-pointer relative flex gap-3 items-center ">
          <p>HOME</p>
          <FaAngleDown />
          <div className="menu w-[16rem] bg-white shadow py-2 border-t-2 border-t-primary absolute top-10">
            <p className="p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl bg-white">
              Menu One
            </p>
            <p className="p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl">
              Menu Two
            </p>
            <p className="p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl">
              Menu Three
            </p>
            <div className="submenu p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl flex justify-between">
              <p>Sub Menu</p>
              <FaAngleRight size={20} />
              <div className="submenumenu bg-white w-[16rem] shadow py-2 border-t-2 border-t-primary absolute -bottom-[8.25rem] -right-[16rem]">
                <p className="p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl">
                  Menu One
                </p>
                <p className="p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl">
                  Menu Two
                </p>
                <p className="p-4 text-gray-500 hover:text-black hover:bg-gray-100 text-xl">
                  Menu Three
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="hover:text-primary cursor-pointer">SHOP</li>
        <li className="hover:text-primary cursor-pointer">CATALOGUE</li>
        <li className="hover:text-primary cursor-pointer">NEW ARRIVALS</li>
        <li className="hover:text-primary cursor-pointer">CONTACT</li>
      </ul>
      <div className="flex items-center gap-10">
        <IoSearchOutline size={20} />
        <IoIosHeartEmpty size={20} />
        <div className="relative">
          <Link to="/cart">
            <FaShoppingBag size={20} />
            <p className="w-6 h-6 bg-primary rounded-full text-center text-white absolute -top-4 -right-6">
              {cart.length}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
