import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="justify-center text-center">
      <h1 className="text-4xl font-extrabold py-7">Umar Hair Salon Website</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:pr-10 lg:pr-10">
        {/* Card 1 */}
        <div className="w-full border border-black p-4 md:mx-5 lg:mx-5">
          <div className="flex justify-center items-center">
            <Image
              src="/salon.png"
              alt="hair cutting picture"
              width={200}
              height={200}
            />
          </div>
          <p className="text-center py-4">STYLE HAIR CUTTING</p>
          <p className="text-center py-2">PKR 1000</p>
          <div className="flex justify-center my-5">
            <button className="bg-black text-white py-2 px-10 rounded-md active:bg-blue-800">
              Book Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full border border-black p-4 md:mx-5 lg:mx-5">
          <div className="flex justify-center items-center">
            <Image
              src="/salon2.png"
              alt="hair cutting picture"
              width={149}
              height={149}
            />
          </div>
          <p className="text-center py-4">SIMPLE HAIR STYLE CUTTING</p>
          <p className="text-center py-2">PKR 800</p>
          <div className="flex justify-center my-5">
            <button className="bg-black text-white py-2 px-10 rounded-md active:bg-blue-800">
              Book Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full border border-black p-4 md:mx-5 lg:mx-5">
          <div className="flex justify-center items-center">
            <Image
              src="/salone3.png"
              alt="hair cutting picture"
              width={149}
              height={149}
            />
          </div>
          <p className="text-center py-4 mt-2">HAIR STYLING</p>
          <p className="text-center py-2 mt-2">PKR 400</p>
          <div className="flex justify-center my-5 ">
            <button className="bg-black text-white py-2 px-10 rounded-md active:bg-blue-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard
