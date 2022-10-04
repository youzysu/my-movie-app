function MovieDetail ( {coverImage, title} ) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={coverImage} alt={coverImage}/>
        </div>
    )
}

export default MovieDetail;