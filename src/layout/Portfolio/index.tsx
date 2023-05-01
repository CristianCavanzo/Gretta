import React from 'react';
import { Card } from './components/Card';
import Bathrooms from '@img/bathrooms.png';
import styled from 'styled-components';
const PortafolioComponent = styled.section`
	background: #7e7f76;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 80px 40px;
`;
const Portfolio = () => {
	return (
		<PortafolioComponent>
			<Card image={Bathrooms.src} tags={['Arquitectura', 'fashion']}>
				Zion villa
			</Card>
		</PortafolioComponent>
	);
};

export { Portfolio };
