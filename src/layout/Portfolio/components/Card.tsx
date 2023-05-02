import { ButtonPrincipal } from '@components/Buttons/Principal';
import React from 'react';
import styled from 'styled-components';

interface PropsStyled {
	image: string;
}

interface Props {
	children: string;
	tags: string[];
	image: string;
}

const CardComponent = styled.div<PropsStyled>`
	padding: 24px 16px;
	background-image: url(${(props) => props.image});
	background-size: cover;
	height: 540px;
	display: flex;
	align-items: flex-end;
	position: relative;
	.card_gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 50%) 0%,
			rgb(0 0 0 / 20%) 30%,
			rgb(0 0 0 / 0%) 100%
		);
	}
	.tag {
		background: #ff700a;
		color: #000;
		border-radius: 500px;
		padding: 1px 12px;
		font-size: 12px;
		display: inline-flex;
		text-transform: capitalize;
	}
	.card_container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		color: #fff;
		text-transform: uppercase;
		font-size: 24px;
		font-weight: bold;
		z-index: 2;
	}
	.card_container-left-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 8px;
	}
	.card_container-rigth {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	@media (max-width: 940px) {
		max-width: 500px;
	}
`;

const Card = ({ children, image, tags }: Props) => {
	return (
		<CardComponent image={image}>
			<div className="card_gradient"></div>
			<div className="card_container">
				<div className="card_container-left">
					{children}
					<div className="card_container-left-tags">
						{tags.map((tag, key) => (
							<div className="tag" key={`tag_${key}`}>
								{tag}
							</div>
						))}
					</div>
				</div>
				<div className="card_container-rigth">
					<ButtonPrincipal>Ver proyecto</ButtonPrincipal>
				</div>
			</div>
		</CardComponent>
	);
};

export { Card };
