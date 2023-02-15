import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Actors: actors,
    imdbRating: rating,
  } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>
          <span>plot: </span>
          {plot}
        </p>
        <p>
          <span>actors: </span> {actors}
        </p>
        <p>
          <span>rating: </span>
          {rating}
        </p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
