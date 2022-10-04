import PropTypes from "props-types";

function Movie( { posterImage, title, summary, genres }) {
    return (
        <div>
        <img src={posterImage} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map((kind) => (
                <li key={kind}>{kind}</li>
            ))}
        </ul>
    </div>
    );
}

Movie.propTypes = {
    posterImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;