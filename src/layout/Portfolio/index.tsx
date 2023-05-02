import React from 'react';
import { Card } from './components/Card';
import Bathrooms from '@img/bathrooms.png';
import styled from 'styled-components';
import { Title } from '@components/Titles';
const PortafolioComponent = styled.section`
	display: grid;
	grid-template-columns: 2fr 1fr 2fr;
	padding: 80px 40px;
	column-gap: 40px;
	.portafolio_container--text {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.portafolio_container--text-bottom {
		font-size: 24px;
	}
	@media (max-width: 1024px) {
		column-gap: 20px;
	}
	@media (max-width: 940px) {
		row-gap: 24px;
		grid-template-columns: 1fr;
		justify-items: center;
		.portafolio_container--text {
			text-align: center;
		}
	}
	@media (max-width: 650px) {
		padding: 40px 20px;
	}
`;

const Portfolio = () => {
	return (
		<PortafolioComponent>
			<Card image={Bathrooms.src} tags={['Arquitectura', 'fashion']}>
				Zion villa
			</Card>
			<div className="portafolio_container--text">
				<Title transform="uppercase" sizes="s">
					Our projects
				</Title>
				<p className="portafolio_container--text-bottom text-bold">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem corporis quia a accusantium
				</p>
			</div>
			<Card image={Bathrooms.src} tags={['Arquitectura', 'fashion']}>
				Zion villa
			</Card>
		</PortafolioComponent>
	);
};

export { Portfolio };
