import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Review = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-5">
      <h2 className="text-3xl text-blue-1 font-semibold mb-5 text-center">
        Our Customers Says
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <div className="pb-10">
            <div className="text-center text-3xl mb-6 text-yellow-1">
              <FaQuoteRight className="inline"></FaQuoteRight>
            </div>
            <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto mb-10">
              I recently purchased a vehicle from Car Dealer and {"couldn't"} be
              happier with the experience. The sales team was knowledgeable,
              patient, and genuinely cared about finding the right car for my
              needs. The financing process was smooth, and they offered a fair
              trade-in value for my old car. Highly recommend to anyone in the
              market for a new vehicle!
            </p>
            <h2 className="text-xl text-blue-1 font-semibold mb-1 text-center">
              Alex Thompson
            </h2>{" "}
            <p className="text-gray-800 text-center text-sm">Vehicle Buyer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-10">
            <div className="text-center text-3xl mb-6 text-yellow-1">
              <FaQuoteRight className="inline"></FaQuoteRight>
            </div>
            <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto mb-10">
              Visiting Car Dealer was a breath of fresh air compared to other
              dealerships {"I've"} been to. The showroom was clean and
              well-organized, and the staff was friendly without being pushy.
              They gave me all the information I needed to make an informed
              decision. Lost a star because the wait time for paperwork was a
              bit longer than expected, but overall a very positive experience.
            </p>
            <h2 className="text-xl text-blue-1 font-semibold mb-1 text-center">
              Samuel Wallace
            </h2>{" "}
            <p className="text-gray-800 text-center text-sm">Vehicle Buyer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-10">
            <div className="text-center text-3xl mb-6 text-yellow-1">
              <FaQuoteRight className="inline"></FaQuoteRight>
            </div>
            <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto mb-10">
              {" Can't"} say enough good things about Car Dealer ! From the
              moment I walked in, I felt valued as a customer. Their extensive
              inventory made it easy to find the perfect car, and their pricing
              was transparent and fair. The after-sales support has been
              exceptional too. {"It's"} evident they pride themselves on
              building long-term relationships with their customers.
            </p>
            <h2 className="text-xl text-blue-1 font-semibold mb-1 text-center">
              Jennifer Martinez
            </h2>{" "}
            <p className="text-gray-800 text-center text-sm">Vehicle Buyer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
