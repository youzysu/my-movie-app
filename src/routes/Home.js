import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
      <div className={styles.header}>
        <h1> MogaBox Movie Theater
        </h1>
        <span>
          Select a movie card you want !
        </span>
      </div>
      <div className={styles.container}>
        {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
        ) : (
          <div className={styles.movies}>
              {movieList.map((movie) => (
                  <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      posterImage={movie.medium_cover_image}
                      title={movie.title}
                      summary={movie.summary}
                      genres={movie.genres}
                  />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;