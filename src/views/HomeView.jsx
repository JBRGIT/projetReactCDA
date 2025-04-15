import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import apiMovie from "../api/apiMovie";
import { useSelector } from "react-redux";
import Pagination from "./../components/home/Pagination";

function HomeView() {
  const [movies, setMovies] = useState([]);
  const inputValue = useSelector((state) => state.inputValue.value);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!inputValue) {
      apiMovie
        .get(`/trending/movie/week?language=fr-FR&page=${page}`)
        .then((res) => {
          setMovies(res.data.results);
          setTotalPages(res.data.total_pages);
        });
    } else {
      apiMovie
        .get(
          `/search/movie?language=fr-FR&query=${inputValue}&include_adult=false&page=${page}`
        )
        .then((res) => {
          setMovies(res.data.results);
          setTotalPages(res.data.total_pages);
        });
    }
  }, [inputValue, page]);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [inputValue]);

  return (
    <div className="min-h-screen  ">
      <div className=" p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-6 justify-items-center">
        {movies.map((movie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
            className="w-[120px] h-[180px] sm:w-[140px] sm:h-[210px] md:w-[140px] md:h-[210px] lg:w-[160px] lg:h-[240px]"
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default HomeView;
