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
  const [brand, setBrand] = useState();
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch(`https://automotive-server-aminurjs.vercel.app/products/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://automotive-server-aminurjs.vercel.app/brands/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto pb-20">
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
                src={brand?.slider[0]}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full md:h-96 lg:h-[600px] h-[300px]"
                src={brand?.slider[1]}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full md:h-96 lg:h-[600px] h-[300px]"
                src={brand?.slider[2]}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <h2 className="text-2xl md:text-3xl text-blue-1 dark:text-gray-200  font-semibold mb-10 text-center">
          Explore Your Dream Cars
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsProducts;
