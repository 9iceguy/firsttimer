import Hero from "../components/Hero";
import Collections from "../components/Collections";
import PopularProducts from "../components/PopularProducts";
import { useEffect, useState } from "react";
import MostRated from "../components/MostRated";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch("https://bafutofakeproducts.onrender.com/products/")
      .then((res) => res.json())
      .then((products) => {
        setdata(products);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  const popProd = data?.slice(0, 6);

  return (
    <>
      <Hero />
      <Collections />
      <PopularProducts products={popProd} loading={loading} />
      <MostRated />
    </>
  );
};

export default Homepage;
