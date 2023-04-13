import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import House from '@img/house.png';
import { ContainerPreview } from './Preview/Container';
import { IContainerSlider } from './Preview/Container/containerSlider';

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
		align-items: center;
		.container_left,
		.container_right {
			width: 50%;
		}
	}
	.gradient {
		z-index: 1;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.8603816526610644) 0%,
			rgb(0 0 0 / 80%) 30%,
			rgba(255, 255, 255, 0) 100%
		);
		opacity: 0.5;
	}
	@media (max-width: 1200px) {
		padding: 80px 2.5vw;
	}
	@media (max-width: 768px) {
		padding: 40px 1vw;
		.container_left {
			display: none;
		}
		.container .container_right {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
`;

const SliderMain = ({ children }) => {
	const preview: IContainerSlider[] = [
		{
			image: { src: House.src, alt: 'Imagen de prueba' },
			name: 'Casa en el campo',
			selected: true,
		},
		{
			image: { src: House.src, alt: 'Imagen de prueba' },
			name: 'Casa ',
			selected: false,
		},
		{
			image: { src: House.src, alt: 'Imagen de prueba' },
			name: 'Casa 2',
			selected: false,
		},
		{
			image: { src: House.src, alt: 'Imagen de prueba' },
			name: 'Casa 3',
			selected: false,
		},
	];
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
					<ContainerPreview preview={preview} />
				</div>
			</div>
		</Slider>
	);
};

export { SliderMain };
