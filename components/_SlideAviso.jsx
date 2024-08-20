
import { Fragment, useState } from 'react'

import { 
	Box, 
	Text, 
	Modal, 
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';

const ModalAviso = ({ handledOpen, isView }) => {

	const avisoConfidencialidad =
	' es la responsable del tratamiento de sus datos personales, los cuales se recabarán para proveer servicios y productos requeridos. Otros fines serán el envío de información sobre nuevos productos o servicios, evaluar la calidad del servicio.  Si desea acceder a nuestro aviso de privacidad completo lo puede consultar en: '

return (
	
	<Modal onClose={handledOpen} isOpen={isView} size="6xl" blockScrollOnMount={false} >
		<ModalOverlay/>
		<ModalContent>
		<ModalCloseButton style={{ color: "white" }} />
				{/* <Button color="#fff" bg="tomato" onClick={onToggle}>
					Aviso de privacidad
				</Button> */}

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
				
		</ModalContent>
	</Modal>)
}

const SlideEx = () => {
	const [ isOpen, onToggle ] = useState(false)
	const handledOnelAviso = () => onToggle(!isOpen)

	return (
		<Fragment>
      <a href="/politicas" className="about__button">Politicas de genero</a>
			<button onClick={handledOnelAviso} className="about__button" >Aviso de confidencialidad</button>
			<ModalAviso handledOpen={handledOnelAviso} isView={isOpen} />
		</Fragment>
	);
}

export default SlideEx
