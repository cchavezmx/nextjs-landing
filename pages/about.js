// Custom components
import CompanyCard from "../components/_CompanyCard.jsx";
import Hero from "../components/_Hero.jsx";
import Footer from "../components/_Footer.jsx";
import { Fragment } from "react";
// import Link from "next/link";
import Navigation from "../components/_Navigation";

// Data JSON_files
import { About, EmpresasJson } from "../assets/aboutData.json";


export default function about() {
	return (
	<Fragment>
		
		<main className="About">
			<nav className="navbar">
				<Navigation />
			</nav>
			<Hero />
			<div className="flex-center">
				<div className="about__container">
					<section className="about__section shadow-box">
						<div className="about__question blue-box">
							<h2 className="about__who">¿Quienes somos?</h2>
						</div>

						<div className="about__answer white-box">
							<p className="about__paragraph">
								<strong>GRUPO INTECSA&reg;</strong>
								{About.paragraph}
							</p>
						</div>
					</section>
				</div>
			</div>

			<div className="about__gradient-blue flex-center">
				<div className="about__container">
					<CompanyCard company={EmpresasJson} />
				</div>
			</div>

			<div className="flex-center">
				<div className="about__container">
					<section className="about__section shadow-box">
						<div className="about__question blue-box">
							<h2 className="about__who">Trabajos más recientes</h2>
						</div>
						<div className="about__answer white-box">
							<ul className="about__list">
								{About.trabajosRecientes.map((job, index) => {
									return(
										<>
											<li key={index}>{job}</li>
										</>
									)
								})}
							</ul>
						</div>
					</section>
				</div>
			</div>

			{/* 
			<div className="about__gradient-blue flex-center">
				<div className="about__container">
					Slider con imagenes de certificaciones
				</div>
			</div> 

			<Link href="/" replace={true}>
				<p className="linkbutton">Regresar</p>
			</Link>
			*/}

		</main>
		<Footer />
	</Fragment>

	);
}
