import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <h2 className="text-3xl text-blue-1 dark:text-slate-200 font-semibold mb-5 text-center">
        Explore Your Dream Brands
      </h2>
      <p className=" text-gray-600 dark:text-gray-300 font-medium text-center max-w-3xl mx-auto mb-10">
        Dive into a realm where dreams meet the driveway. Here, luxury, comfort,
        and performance converge. From sporty to classic, find a vehicle that
        truly mirrors your aspirations. Your dream car awaits.
      </p>
      <div className="grid grid-cols-3 gap-6">
        {brands?.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
