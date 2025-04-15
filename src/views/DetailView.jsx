import { useParams } from "react-router";
import PosterDetail from "../components/detail/PosterDetail";
import DetailMovie from "../components/detail/DetailMovie";
import CastDetail from "./../components/detail/CastDetail";
import BackDetail from "./../components/detail/BackDetail";
import { useState } from "react";
import { useEffect } from "react";
import apiMovie from "../api/apiMovie";
import SimilarDetail from "../components/detail/similarDetail";

function DetailView() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    apiMovie.get(`/movie/${id}?language=fr-FR`).then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  if (!movie)
    return (
      <div className="min-h-screen text-white text-lg">Loading movie...</div>
    );

  return (
    <div className="bg-gray-800 min-h-screen py-4  ">
      <div className="flex flex-col sm:flex-row  gap-8   w-[80%] mx-auto   ">
        <PosterDetail movie={movie} />
        <DetailMovie movie={movie} />
      </div>

      <CastDetail id={id} />
      <BackDetail id={id} />
      <SimilarDetail id={id} />
    </div>
  );
}

export default DetailView;
