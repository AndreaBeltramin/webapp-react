import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieIndexPage() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const url = "http://localhost:3000/movies";

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.movies);
				setMovies(data.movies);
			});
	}, []);

	return (
		<>
			<div className="container my-5">
				<h1>Il nostro catalogo di film pensati per te!</h1>
				{/* <h3>Scorri per scoprirli tutti</h3> */}
				<div className="row row-cols-5 my-4">
					{movies.map((movie, index) => (
						<div className="col" key={index}>
							<Link to={"/movies/" + movie.id}>
								<div className="card h-100">
									<img
										src={movie.image}
										alt={movie.name}
										className="card-img-top h-100"
									/>
									<div className="card-body">
										<h3 className="card-title">{movie.title}</h3>
										<p className="card-text">{movie.abstract}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>

			{/* <div className="container">
				<div id="carouselMoviesList" className="carousel slide">
					<div className="carousel-inner p-5">
						{movies.map((movie, index) => (
							<div className='carousel-item '>

								<img
									src={movie.image}
									className="d-block img-fluid "
									alt={movie.name}
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>{movie.title}</h5>
									<p>{movie.abstract}</p>
								</div>
							</div>
						))}
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouseMoviesList"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouseMoviesList"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div> */}
		</>
	);
}
