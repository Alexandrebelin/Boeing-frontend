import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import media1 from "../assets/media/media-1.jpeg";
import media2 from "../assets/media/media-2.jpeg";
import media3 from "../assets/media/media-3.jpeg";
import media4 from "../assets/media/media-4.jpeg";

const Carroussel = () => {
  const pictures = [media1, media2, media3, media4];
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div>
      <Carousel
        className="slider"
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {pictures.map((picture) => {
          return <img src={picture} alt="" className="image" />;
        })}
      </Carousel>
    </div>
  );
};

export default Carroussel;
