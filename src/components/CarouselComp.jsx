import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow left">
    <FaChevronLeft />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow right">
    <FaChevronRight />
  </button>
);

const CarouselComp = ({ filteredProducts, vendors }) => {
  return (
    <section>
      <Carousel
        className="categories-carousel"
        responsive={responsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {filteredProducts.map((product, idx) => (
          <ProductCard product={product} vendors={vendors} key={idx} />
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComp;
