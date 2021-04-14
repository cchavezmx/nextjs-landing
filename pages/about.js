import { useState } from 'react'
// Custom components
import CompanyCard from "../components/_CompanyCard.jsx";
import Hero from "../components/_Hero.jsx";
import Footer from "../components/_Footer.jsx";
import { Fragment } from "react";
// import Link from "next/link";
import Navigation from "../components/_Navigation";

// Data JSON_files
import { About, EmpresasJson } from "../assets/aboutData.json";

// npm Component
// import PDFViewer from 'pdf-viewer-reactjs'

// chakra
import {
	Modal, 
	ModalOverlay, 
	ModalCloseButton,
	ModalContent
}from '@chakra-ui/react'


const ModalPDF = ({ isOpen, toggleOpen }) => {

	return(
		<Modal isOpen={isOpen} onClose={toggleOpen} size="full">
			<ModalCloseButton />
			<ModalContent>
				<ModalOverlay />
					{/* <PDFViewer 
					document={{
						url: 'pdf/CV2.pdf'
					}}
					/> */}
			</ModalContent>
		</Modal>
	)
}

const about = () => {

	const [isOpen, setIsOpen ] = useState(false)
	const toggleOpen = () => setIsOpen(!isOpen)

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
							<a href="pdf/CV2.pdf" target="_blank" className="btn--blur"><p>Descargar Currículum</p></a>
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
		{/* <button onClick={toggleOpen}>Ver Curriculum</button>
			<ModalPDF isOpen={isOpen} toggleOpen={toggleOpen} />  */}

		</main>
		<Footer />
	</Fragment>

	);
}


export default about