import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Arrow from '@icons/arrow.svg';
const CardComponent = styled.div<{ image: string }>`
	display: inline-flex;
	width: 100%;
	height: 700px;
	.cardComponent_container {
		position: relative;
		width: 100%;
		background: url(${(props) => props.image});
		background-size: cover;
		display: flex;
		align-items: flex-end;
		padding: 40px 16px;
	}
	.cardComponent_gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 85%) 0%,
			rgb(0 0 0 / 30%) 40%,
			rgb(0 0 0 / 0%) 60%,
			rgb(0 0 0 / 0%) 100%
		);
	}
	.cardComponent_container--text {
		z-index: 1;
		font-size: 32px;
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.cardComponent_container--text-subtitle {
		font-size: 16px;
	}
`;

interface Props {
	children: React.ReactNode;
	image: {
		src: string;
		alt: string;
	};
	setIdState: React.Dispatch<React.SetStateAction<number>>;
	id: number;
	active: boolean;
	subtitle?: string;
}

const Card = ({ children, image, id, setIdState, active, subtitle }: Props) => {
	return (
		<CardComponent image={image.src} onMouseOver={() => setIdState(id)}>
			<div className="cardComponent_container">
				<div className="cardComponent_gradient"></div>
				<div className="cardComponent_container--text text-uppercase">
					<div>
						<p className="cardComponent_container--text-subtitle">{subtitle}</p>
						<p className=" text-bold ">{children}</p>
					</div>
					{active && <Image alt="arrow" width={20} height={20} src={Arrow} />}
				</div>
			</div>
		</CardComponent>
	);
};

export { Card };
