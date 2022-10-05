import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie( { id, posterImage, title, summary, genres, year }) {
    return (
    <Link to={`/movie/${id}`}>
    <div className={styles.movie}>
        <img className={styles.movie__img} src={posterImage} alt={title} />
        <div>
              
            <h2 className={styles.movie__title}>
                {title}
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 240 ? `${summary.slice(0, 235)}...` : summary }</p>
            <ul className={styles.movie__genres}>
                {genres.map((kind) => (
                    <li key={kind}>{kind}</li>
                ))}
            </ul>
        </div>
    </div>
    </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;