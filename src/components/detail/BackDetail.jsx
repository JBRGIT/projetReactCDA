import { useEffect } from "react";
import { useState } from "react";
import apiMovie from "../../api/apiMovie";
import Slider from "react-slick";

function BackDetail({ id }) {
  const [movieImages, setmovieImages] = useState([]);

  useEffect(() => {
    apiMovie.get(`/movie/${id}/images`).then((res) => {
      console.log(res.data.backdrops);
      setmovieImages(res.data.backdrops);
    });
  }, [id]);


  const settings = {
    infinite: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    
  };

  if (!movieImages.length) {
    return (
      <div className="min-h-screen  text-white">
        Images en cours de chargement
      </div>
    );
  }

  return (
    <div className="w-[68%]  mx-auto my-8">
      <Slider {...settings}>
        {movieImages.map((image, index) => (
          <div key={index}>
            <img
              className="rounded-lg w-full object-cover"
              src={`https://image.tmdb.org/t/p/w1280${image.file_path}`}
              alt="img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BackDetail;
