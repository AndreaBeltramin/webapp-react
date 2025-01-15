export default function Card({ data }) {
	return (
		<div className="card h-100">
			<img src={data.image} alt={data.name} className="card-img-top h-100" />
			<div className="card-body">
				<h3 className="card-title">{data.title}</h3>
				<p className="card-text">{data.abstract}</p>
			</div>
		</div>
	);
}
