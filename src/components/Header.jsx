import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					My Movie Webapp React
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								className="nav-link active"
								aria-current="page"
								to="/movies"
							>
								Movie List
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
