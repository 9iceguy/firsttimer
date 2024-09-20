import heroimg from "../assets/heroimg.png";
const Hero = () => {
  return (
    <div className="h-[100vh] flex items-center w-full justify-around bg-gray-100">
      <img className="h-full " src={heroimg} alt="" />
      <div className="flex items-center justify-end flex-col">
        <p className="text-lg uppercase">#New Summer Collection 2019</p>
        <p className="text-[70px] -mt-4 uppercase font-bold">Arrivals Sales</p>
        <button className=" uppercase mt-6 px-8 py-4  bg-black text-white hover:bg-black/80 ">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
