import Topper from "./ui/Topper";
import { FaStar } from "react-icons/fa";
import loader from "../assets/loader.gif";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const PopularProducts = ({ products, loading }) => {
  //   console.log(products);
  return (
    <div className="min-h-[100vh] py-24 w-full flex justify-center items-center bg-white ">
      <div className="h-full w-[85%]">
        <Topper text="Popular Products" height={30} />

        {loading ? (
          <div className="flex flex-col gap-8 items-center justify-center h-full w-full">
            <div className="animate-spin w-10 h-10 text-primary border-4 border-primary-light"></div>
            <p className="text-sm text-gray-500">Loading...</p>
            <img src={loader} alt="" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-12">
            {products?.map((prod) => (
              <ProductCard prod={prod} key={prod._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
