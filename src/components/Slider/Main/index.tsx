import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import House from '@img/house.png';
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
				<div>{children}</div>
				<div></div>
			</div>
		</Slider>
	);
};

export { SliderMain };
