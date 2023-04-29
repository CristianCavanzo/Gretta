import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const CardComponent = styled.div`
	display: flex;
	column-gap: 12px;
	cursor: pointer;
	:hover .card_container--text {
		color: #000;
	}
	.card_container--image {
		width: 100px;
		height: 70px;
		position: relative;
	}
	.card_container--text {
		font-size: 32px;
		color: #808080;
		font-weight: bold;
		transition: color 170ms ease-in;
	}
	.card_container--text:hover {
		transition: color 200ms ease-in;
		color: #000;
	}
	.card_active--image {
		outline: 2px solid black;
		padding: 2px;
	}
	.card_active--text {
		color: #000000;
	}
`;
interface IProps {
	children: string;
	image: {
		src: string;
		alt: string;
	};
	active: boolean;
	activateCards: React.Dispatch<
		React.SetStateAction<
			{
				image: {
					src: string;
					alt: string;
				};
				active: boolean;
				text: string;
			}[]
		>
	>;
	cards: {
		image: {
			src: string;
			alt: string;
		};
		active: boolean;
		text: string;
	}[];
	id: number;
}
const Card = ({ children, image, active, activateCards, cards, id }: IProps) => {
	const handleActive = () => {
		const newCards = [...cards];
		const findActivateIndex = newCards.findIndex((card) => card.active);
		newCards[findActivateIndex].active = false;
		newCards[id].active = true;
		activateCards(newCards);
	};

	return (
		<CardComponent onClick={handleActive}>
			<div className={`${active && 'card_active--image'} border-radious-8`}>
				<div className={`card_container--image border-radious-8`}>
					<Image
						src={image.src}
						alt={image.alt}
						className="border-radious-8"
						style={{ objectFit: 'cover' }}
						quality="100"
						fill
					/>
				</div>
			</div>
			<div className={`${active && 'card_active--text'} card_container--text`}>{children}</div>
		</CardComponent>
	);
};

export { Card };
