// Custom components
import CompanyCard from "../components/_CompanyCard.jsx";
import Hero from "../components/_Hero.jsx";
import Footer from "../components/_Footer.jsx";
import Link from "next/link";
import Navigation from "../components/_Navigation";
import SlideEx from "../components/_SlideAviso";

// Data JSON_files
import data from "../assets/aboutData.json";
// Extrae los ['trabajos mas recientes'] de data y general una lista desordenada
const trabajosRecientes = () => {
	const trabajosRecientes = data.About["Trabajos más recientes"];
	const trabajosRecientes_list = trabajosRecientes.map((trabajosRecientes, i) => (
		<li key={i}>{trabajosRecientes}</li>
	));
	return <ul className="about__list">{trabajosRecientes_list}</ul>;
};

export default function about() {
	return (
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
								{data.About.paragraph}
							</p>
						</div>
					</section>
				</div>
			</div>

			<div className="about__gradient-blue flex-center">
				<div className="about__container">
					<CompanyCard company={data.EmpresasJson} />
				</div>
			</div>

			<div className="flex-center">
				<div className="about__container">
					<section className="about__section shadow-box">
						<div className="about__question blue-box">
							<h2 className="about__who">Trabajos más recientes</h2>
						</div>
						<div className="about__answer white-box">{trabajosRecientes()}</div>
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

			<SlideEx />

			<Footer />
		</main>
	);
}
