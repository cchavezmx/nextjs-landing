import { Box, Button, Slide, Text, useDisclosure } from '@chakra-ui/react';

export default function SlideEx() {
	const { isOpen, onToggle } = useDisclosure();

	const avisoConfidencialidad =
		' es la responsable del tratamiento de sus datos personales, los cuales se recabarán para proveer servicios y productos requeridos. Otros fines serán el envío de información sobre nuevos productos o servicios, evaluar la calidad del servicio.  Si desea acceder a nuestro aviso de privacidad completo lo puede consultar en https://la_pagina_donde_pondríamos_el_aviso';

	return (
		<>
			<Button color="#fff" bg="tomato" onClick={onToggle}>
				Aviso de confidencialidad
			</Button>
			<Slide
				direction="top"
				mt="40px"
				in={isOpen}
				style={{ zIndex: 1100 }}
			>
				<Box
					bg="#003769"
					color="white"
					p="40px"
					rounded="md"
					shadow="md"
					top="76"
				>
					<Text
						borderBottom="1px"
						color="white"
						fontSize="large"
						fontWeight="bold"
						mb="25px"
						textAlign="center"
					>
						Aviso de confidencialidad
					</Text>
					<Text
						color="white"
						fontSize="medium"
						fontWeight="thin"
						mb="25px"
						textAlign="justify"
					>
						GRUPO INTECSA&reg;{avisoConfidencialidad}
					</Text>
				</Box>
			</Slide>
		</>
	);
}
