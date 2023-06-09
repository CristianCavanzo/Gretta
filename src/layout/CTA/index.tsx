import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Card } from './components/card';

const Section = styled.section`
	padding: 80px 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	div {
		display: flex;
		align-items: flex-end;
	}
	ul {
		display: flex;
		flex-direction: column;
		row-gap: 12px;
	}
	.cta_container--card {
		column-gap: 12px;
		color: #666666;
		font-weight: bold;
		list-style: none;
		display: flex;
		align-items: flex-end;
	}
	.cta_container--card-bold {
		color: #3d3d3d;
	}
	.cta_container--rigth {
		position: relative;
		width: 700px;
		height: 400px;
	}
	.cta_container--left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		row-gap: 20px;
		justify-content: center;
	}
	@media (max-width: 1100px) {
		.cta_container--rigth {
			max-width: 600px;
			width: 50vw;
		}
	}
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		row-gap: 22px;
		justify-items: center;
		.cta_container--rigth {
			width: 90vw;
		}
		.cta_container--left {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 650px) {
		padding: 40px 20px;
		.cta_container--left {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 425px) {
		.card_container--text {
			font-size: 24px;
		}
	}
`;
import Dinnnig from '@img/dinning.png';
import Office from '@img/office.png';
import Lounge from '@img/lounge.png';
import Bathrooms from '@img/bathrooms.png';
import Image from 'next/image';
const CTA = () => {
	const images = [
		{
			image: {
				src: Dinnnig.src,
				alt: 'Dinning image',
			},
			active: true,
			text: 'Dinning',
		},
		{
			image: {
				src: Office.src,
				alt: 'Office image',
			},
			active: false,
			text: 'Office',
		},
		{
			image: {
				src: Lounge.src,
				alt: 'Lounge image',
			},
			active: false,
			text: 'Lounge',
		},
		{
			image: {
				src: Bathrooms.src,
				alt: 'Bathrooms image',
			},
			active: false,
			text: 'Bathrooms',
		},
	];
	const [state, setState] = useState(images);
	const activeImage = state.find((item) => item.active);
	return (
		<Section>
			<div className="cta_container--left">
				<ul>
					{state.map((itm, key) => (
						<Fragment key={key}>
							<li className="cta_container--card">
								<p className={`${itm.active && 'text-bold cta_container--card-bold'}`}>
									{`0${key + 1} `}
								</p>
								<Card
									image={itm.image}
									active={itm.active}
									activateCards={setState}
									cards={state}
									id={key}
								>
									{itm.text}
								</Card>
							</li>
						</Fragment>
					))}
				</ul>
			</div>

			<div className="cta_container--rigth">
				<Image
					src={activeImage.image.src}
					alt={activeImage.image.alt}
					style={{ objectFit: 'cover' }}
					quality="100"
					fill
				/>
			</div>
		</Section>
	);
};

export { CTA };
