import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovieList(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovieList();
  }, [])
  
  return (
    <div>
      {loading ? (
      <h1>영화 정보를 가져오고 있습니다. 잠시만 기다려주세요!</h1>
      ) : (
        <div>
            {movieList.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    posterImage={movie.medium_cover_image}
                    title={movie.title_long}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;