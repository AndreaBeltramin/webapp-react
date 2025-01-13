import { useState, useEffect } from "react";

export default function MovieIndexPage() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const url = "http://localhost:3000/movies";

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data);
			});
	}, []);

	return (
		<>
			<div className="container my-5">
				<h1>Movies List</h1>
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>{movie.title}</li>
					))}
				</ul>
			</div>
		</>
	);
}
