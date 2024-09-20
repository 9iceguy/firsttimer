import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "../store/productStore";
import Button from "../components/ui/Button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);

  console.log(cart);
  const handleAddClick = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://bafutofakeproducts.onrender.com/products/${id}`
        );
        if (response.data) {
          setProduct(response.data);
        } else {
          toast.error("Product not found");
        }
      } catch (err) {
        toast.error("Error rendering product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col gap-8 items-center justify-center h-full w-full">
          <div className="animate-spin w-10 h-10 text-primary border-4 border-primary-light"></div>
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      ) : (
        <div className="">
          <img src={product.imageUrl} alt={product.name} />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button onclick={handleAddClick} text="Add to Cart" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
