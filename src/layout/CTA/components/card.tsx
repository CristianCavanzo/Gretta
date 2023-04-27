import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const CardComponent = styled.div`
	display: flex;
	align-items: flex-end;
	column-gap: 12px;
	cursor: pointer;
	.card_container--image {
		padding: 4px;
		width: 100px;
		height: 70px;
		position: relative;
	}
	.card_container--text {
		font-size: 32px;
		color: #808080;
		font-weight: bold;
	}
`;
interface IProps {
	children: string;
	image: {
		src: string;
		alt: string;
	};
	active: boolean;
}
const Card = ({ children, image, active }: IProps) => {
	return (
		<CardComponent>
			<div className={`${active && 'card_active--image'} card_container--image border-radious-8`}>
				<Image
					src={image.src}
					alt={image.alt}
					className="border-radious-8"
					style={{ objectFit: 'cover' }}
					quality="100"
					fill
				/>
			</div>
			<div className={`${active && 'card_active--text'} card_container--text`}>{children}</div>
		</CardComponent>
	);
};

export { Card };
