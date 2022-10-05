import styles from "./MovieDetail.module.css";

function MovieDetail ( {coverImage, title, rating, year, description, url, runtime} ) {
    return (
        <div className={styles.MovieDetail}>
            <div className={styles.title}><h3>Your Movie Choice</h3><h1>{title}</h1></div>
            <div className={styles.movie}>
                <img src={coverImage} alt={coverImage}/>
                <div>
                    <div className={styles.subText}>
                        <span>★ {rating}</span>
                        <span>{year}</span>
                        <span>{runtime} minutes</span>
                        <a href={url}>Click to Download</a>
                    </div>
                    <div className={styles.description}>Summary <hr />{description}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;