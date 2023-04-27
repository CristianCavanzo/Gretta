import React from 'react';
import styled from 'styled-components';
import { Card } from './components/card';
const Section = styled.section`
	padding: 80px 40px;
`;
import Dinnnig from '@img/dinning.png';
const CTA = ({ children }) => {
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
				src: Dinnnig.src,
				alt: 'Office image',
			},
			active: true,
			text: 'Office',
		},
		{
			image: {
				src: Dinnnig.src,
				alt: 'Lounge image',
			},
			active: true,
			text: 'Lounge',
		},
		{
			image: {
				src: Dinnnig.src,
				alt: 'Bathrooms image',
			},
			active: true,
			text: 'Bathrooms',
		},
	];
	const image = {
		src: Dinnnig.src,
		alt: 'Dinning image',
	};
	return (
		<Section>
			{images.map((itm, key) => (
				<Card image={image} active={false} key={key}>
					{itm.text}
				</Card>
			))}
		</Section>
	);
};

export { CTA };
