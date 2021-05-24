import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import media1 from "../assets/media/media-1.jpeg";
import media2 from "../assets/media/media-2.jpeg";
import media3 from "../assets/media/media-3.jpeg";
import media4 from "../assets/media/media-4.jpeg";
import ButtonCarousel from "./ButtonCarousel";

const Carroussel = () => {
  const pictures = [
    {
      media: media1,
      title:
        "Boeing répond à l'approbation de l'AESA pour le retour en service du 737 MAX",
    },
    {
      media: media2,
      title:
        "David Calhoun prend ses fonctions de Président-directeur général de Boeing",
    },
    {
      media: media3,
      title:
        "Boeing inaugure une nouvelle usine de fabrication de pièces d’avion à Sheffield",
    },
    {
      media: media4,
      title: "Le nouveau Boeing 777X effectue son premier vol avec succès",
    },
  ];
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
        swipeable={true}
        arrows
        autoPlaySpeed={3000}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl={true}
        minimumTouchDrag={80}
        responsive={responsive}
        slidesToSlide={1}
      >
        {pictures.map((picture, index) => {
          return (
            <div key={index}>
              <img src={picture.media} alt="image caroussel" />
              <ButtonCarousel title={picture.title} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carroussel;
