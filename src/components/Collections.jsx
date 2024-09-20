import women from "../assets/women.png";
import shoe from "../assets/shoe.png";
import men from "../assets/men.png";
import Topper from "./ui/Topper";

const Collections = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-white">
      <div className="h-full w-[85%] ">
        <Topper text="Discover the collections" height={50} />
        <div className="botm h-[80%] w-full  ">
          <div className=" bg-gray-100 relative flex items-center w-full h-[80%] justify-center">
            <img className="scale-50  object-cover" src={women} alt="" />
            <button className="uppercase absolute top-[50%] mt-6 px-8 py-4  bg-white text-black  m-auto hover:bg-black hover:text-white">
              Women
            </button>
          </div>
          <div className=" flex h-full gap-4 flex-col ">
            <div className=" h-[39%] bg-gray-100 relative  w-full flex items-center justify-center">
              <img
                className=" w-[50%] h-4/5 absolute object-cover"
                src={men}
                alt=""
              />

              <button className="uppercase absolute top-[40%] mt-6 px-8 py-4  bg-white text-black  m-auto hover:bg-black hover:text-white">
                Men
              </button>
            </div>
            <div className="  h-[39%] bg-gray-100 relative w-full flex items-center justify-center">
              <img
                className="w-[65%] h-4/5 absolute  object-cover"
                src={shoe}
                alt=""
              />

              <button className="uppercase absolute top-[50%] mt-6 px-8 py-4  bg-white text-black  m-auto hover:bg-black hover:text-white">
                Shoes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
