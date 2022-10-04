import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

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
        <div>
            {loading ? (<h1>Loading...</h1>
            ) : (
                <div>
                    <MovieDetail 
                        title={movieDetail.title}
                        coverImage={movieDetail.large_cover_image}
                        />
                </div>
            )}
        </div>
    );
}

export default Detail;