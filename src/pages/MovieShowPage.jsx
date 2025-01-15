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
				{movie && (
					<>
						<div className="row d-flex justify-content-center">
							<div className="col-5  mb-5">
								<div className="card h-100">
									<img
										src={movie.image}
										alt={movie.name}
										className="card-img-top img-fluid"
									/>
									<div className="card-body">
										<h3 className="card-title">{movie.title}</h3>
										<h5 className="card-subtitle">
											{movie.director} - {movie.release_year} - {movie.genre}
										</h5>
										<p className="card-text">{movie.abstract}</p>
										<div className="row row-cols-3">
											{movie.reviews.map((review, index) => (
												<div className="col" key={index}>
													<div className="card h-100">
														<img
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
															className="card-img-top"
															alt={movie.title}
														/>
														<div className="card-body">
															<p>{review.name}</p>
															<p>{review.text}</p>
															<p>{review.vote}</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>

							<form className="row mb-5 align-items-end">
								<div className="col-3">
									<label for="exampleFormControlInput1" className="form-label">
										Nome
									</label>
									<input
										type="text"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="Inserisci il tuo nome"
									></input>
								</div>
								<div className="col-3">
									{" "}
									<label
										for="exampleFormControlTextarea1"
										className="form-label"
									>
										Voto
									</label>
									<input
										type="number"
										className="form-control"
										id="exampleFormControlTextarea1"
										placeholder="Inserisci un voto da 1 a 5"
										min="1"
										max="5"
									></input>
								</div>
								<div className="col-3">
									<label
										for="exampleFormControlTextarea1"
										className="form-label"
									>
										Inserisci la tua recensione
									</label>
									<input
										className="form-control"
										id="exampleFormControlTextarea1"
									></input>
								</div>
								<div className="col-2 d-flex justify-content-center">
									<button className="btn btn-secondary ">Invia</button>
								</div>
							</form>
						</div>
					</>
				)}
			</div>
		</>
	);
}
