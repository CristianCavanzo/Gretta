import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import House from '@img/house.png';
import { Preview } from './Preview';
const Slider = styled.main`
	height: 100vh;
	background: white;
	padding: 80px;
	display: flex;
	position: relative;
	align-items: flex-end;
	.image_background,
	.gradient {
		position: absolute;
		width: 100vw;
		height: 100vh;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.image_background {
		z-index: 0;
	}
	.container {
		z-index: 2;
		display: flex;
		justify-content: space-between;
		width: 100%;
		.container_left {
			width: 50%;
		}
		.container_right {
			width: 50%;
		}
	}
	.gradient {
		z-index: 1;
		background: linear-gradient(transparent, black);
		opacity: 0.5;
	}
`;

const SliderMain = ({ children }) => {
	return (
		<Slider>
			<div className="image_background">
				<Image
					src={House.src}
					alt="prueba"
					fill={true}
					style={{ objectFit: 'cover' }}
					quality="100"
				/>
			</div>
			<div className="gradient"></div>
			<div className="container">
				<div className="container_left">
					<div>{children}</div>
					<div></div>
				</div>
				<div className="container_right">
					<Preview image={{ src: House.src, alt: 'Imagen de prueba' }} name="Prueba" />
				</div>
			</div>
		</Slider>
	);
};

export { SliderMain };
