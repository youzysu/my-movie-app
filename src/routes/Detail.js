import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState();
    const { id } = useParams();
    const getMovieDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovieDetail();
    });

    return (
        <div className={styles.container}>
            {loading ? (
            <div className={styles.loader}>
            <h1>Loading...</h1>
            </div>
            ) : (
                <div>
                    <MovieDetail 
                        title={movieDetail.title}
                        coverImage={movieDetail.medium_cover_image}
                        rating={movieDetail.rating}
                        year={movieDetail.year}
                        description={movieDetail.description_full}
                        url={movieDetail.torrents[0].url}
                        runtime={movieDetail.runtime}
                        />
                </div>
            )}
        </div>
    );
}

export default Detail;