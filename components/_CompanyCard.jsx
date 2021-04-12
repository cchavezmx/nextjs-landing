
import React from 'react';

const _CompanyCard = (props) => {
	return (
		<>
			<div className="company__grid">
				<a href="/about" className="card">
					<div className="cardHeader">
						<img
							src={props.company[0].logo}
							alt={props.company[0].slug}
							className="imgencard"
						/>
					</div>

					<div>
						<h3 className="center">{props.company[0].title}</h3>
						<p>{props.company[0].text}</p>
					</div>
				</a>

				<a href="/about" className="card">
					<div className="cardHeader">
						<img
							src={props.company[1].logo}
							alt={props.company[1].slug}
							className="imgencard"
						/>
					</div>

					<div>
						<h3 className="center">{props.company[1].title}</h3>
						<p>{props.company[1].text}</p>
					</div>
				</a>

				<a href="/about" className="card">
					<div className="cardHeader">
						<img
							src={props.company[2].logo}
							alt={props.company[2].slug}
							className="imgencard"
						/>
					</div>

					<div>
						<h3 className="center">{props.company[2].title}</h3>
						<p>{props.company[2].text}</p>
					</div>
				</a>

				<a href="/about" className="card">
					<div className="cardHeader">
						<img
							src={props.company[3].logo}
							alt={props.company[3].slug}
							className="imgencard"
						/>
					</div>

					<div>
						<h3 className="center">{props.company[3].title}</h3>
						<p>{props.company[3].text}</p>
					</div>
				</a>
			</div>
		</>
	);
};

export default _CompanyCard;
