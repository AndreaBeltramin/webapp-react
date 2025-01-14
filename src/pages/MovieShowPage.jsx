import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieShowPage() {
	const movieId = useParams().id;
	const [movie, setMovie] = useState("");

	useEffect(() => {
		const url = "http://localhost:3000/movies/" + movieId;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.movie);
				setMovie(data.movie);
			});
	}, []);

	return (
		<>
			<div className="container my-5">
				<h1>Movie detail</h1>
				{movie && (
					<div>
						<p>{movie.title}</p>
						<p>{movie.director}</p>
						<p>{movie.genre}</p>
						<p>{movie.release_year}</p>
						<p>{movie.abstract}</p>
					</div>
				)}
			</div>
		</>
	);
}
