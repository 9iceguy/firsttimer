import React from "react";

const Topper = ({ text, height }) => {
  return (
    <div className="h-[20%] w-full py-5 flex gap-10 items-center ">
      <div style={{ height: `30px` }} className=" w-[4px] bg-primary" />
      <div className="text-[24px] uppercase w-[25%]">{text}</div>
    </div>
  );
};

export default Topper;
