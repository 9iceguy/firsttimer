import React, { useState } from "react";
import { useStore } from "../store/productStore"; // Adjust the import path as necessary
import { toast } from "react-toastify";
import empty from "../assets/empty.gif";
import { FaDeleteLeft } from "react-icons/fa6";

const Cart = () => {
  //   const [totalPrice, settotalPrice] = useState(0);
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeOne);

  const handleRemoveClick = (item) => {
    removeFromCart(item);
    toast.info("Product removed from cart");
  };

  //   const arr = [
  //     { name: "toyin", height: 6 },
  //     { name: "vic", height: 5 },
  //     { name: "abdul", height: 5 },
  //   ];
  let total = 0;
  cart.forEach((val) => {
    total = total + val.price;
  });
  //   settotalPrice(total);

  console.log(total);

  return (
    <div className="min-h-[100vh] p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="">
          <p className="text-gray-500">Your cart is empty.</p>
          <img src={empty} />
        </div>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b "
            >
              <div className="flex gap-3 items-center justify-between">
                <div>
                  <img
                    className="h-40 ml-5"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </div>
                <div className="w-3/5 flex flex-col gap-8">
                  <h2 className="font-bold">{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveClick(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaDeleteLeft className=" size-8" />
                </button>
              </div>
            </li>
          ))}
          <p>Total Price: ${total.toFixed(2)} </p>
        </ul>
      )}
    </div>
  );
};

export default Cart;
