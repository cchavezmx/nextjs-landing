import React from 'react';

const _Hero = () => {
	return (
		<div className="about__gradient-blue hero">
			<div className="hero__left">
				<h1 className="hero__title">Grupo</h1>
				<h1 className="hero__title">intecsa</h1>
				<span className="hero__slogan">
					creatividad en electricidad...
				</span>
			</div>
			<div className="hero__right">
				<div className="hero__grid">
					<div className="hero__grid-item">
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src="/img01_500X500.jpg"
										alt="Liverpool - Santa Anita"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className="flip-card-back">
									<h1>Santa Anita</h1>
									<p>Liverpool - 2021.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="hero__grid-item">
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src="/img02_500X500.jpg"
										alt="Tablero de distribución eléctrica"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className="flip-card-back">
									<h1>Tableros de distribución eléctrica</h1>
									<p>Dieño, emsamble, instalación</p>
									<p>y puesta en marcha.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="hero__grid-item">
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src="/img03_500X500.jpg"
										alt="Centro comercial"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className="flip-card-back">
									<h1>Santa Anita</h1>
									<p>Liverpool - 2021</p>
								</div>
							</div>
						</div>
					</div>
					<div className="hero__grid-item">
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src="/img04_500X500.jpg"
										alt="Tableros ABB Epower"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className="flip-card-back">
									<h1>Tableros ABB Epower</h1>
									<p>Venta de equpo y servicio</p>
									<p>Ingeniería eléctrica</p>
								</div>
							</div>
						</div>
					</div>
					<div className="hero__grid-item">
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src="/img05_500X500.jpg"
										alt="Celdas ABB Unisec"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className="flip-card-back">
									<h1>Celdas ABB UNISEC</h1>
									<p>Celdas de media tensión</p>
								</div>
							</div>
						</div>
					</div>
					<div className="hero__grid-item">
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src="/img06_500X500.jpg"
										alt="mercadolibre.com"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</div>
								<div className="flip-card-back">
									<h1>mercadolibre.com</h1>
									<p>Adquiere nuestros productos</p>
									<p>en linea </p>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="hero__grid-item">7</div>
					<div className="hero__grid-item">8</div>
					<div className="hero__grid-item">9</div> */}
				</div>
			</div>
		</div>
	);
};

export default _Hero;
