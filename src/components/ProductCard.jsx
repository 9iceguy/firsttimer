import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { toast } from "react-toastify";
import { useStore } from "../store/productStore";

const ProductCard = ({ prod }) => {
  const num = [0, 0, 0, 0, 0];

  const addToCart = useStore((state) => state.addToCart);

  const handleAddClick = () => {
    addToCart(prod);
    toast.success("Product added to cart");
  };

  return (
    <div key={prod?._id} className="h-[65vh] flex flex-col gap-6 ">
      <Link to={`/products/${prod._id}`} key={prod._id}>
        <img src={prod?.imageUrl} className="h-[80%] w-full" alt="" />
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500">{prod.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 line-through">
              ${prod?.slashedPrice.toFixed(2)}
            </p>
            <p>${prod?.price.toFixed(2)}</p>
          </div>
          <div className="flex">
            {num.map((_, index) => (
              <FaStar
                key={index}
                color={index < prod.rating ? "gold" : "gray"}
                className="cursor-pointer "
              />
            ))}
            {/* <FaStar color="gold" /> */}
          </div>
        </div>
      </Link>
      <Button text="Add" onclick={handleAddClick} />
    </div>
  );
};

export default ProductCard;
