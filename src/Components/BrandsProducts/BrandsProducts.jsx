import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BrandsProducts = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    fetch("../brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  const findBrand = brands?.find(
    (brand) => brand.brand_name.toLowerCase() === name
  );
  console.log(findBrand);

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="mb-40">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
        >
          <SwiperSlide>
            <img
              className="w-full md:h-96 lg:h-[600px] h-[300px]"
              src={findBrand?.slider[0]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full md:h-96 lg:h-[600px] h-[300px]"
              src={findBrand?.slider[1]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full md:h-96 lg:h-[600px] h-[300px]"
              src={findBrand?.slider[2]}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="text-3xl text-blue-1 font-semibold mb-10 text-center">
        Explore Your Dream Brands
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default BrandsProducts;
