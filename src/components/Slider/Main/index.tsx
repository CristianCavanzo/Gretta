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
	background: linear-gradient(blue, pink);
	.image_background,
	.gradient {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.image_background {
		z-index: 0;

		img {
			width: 100%;
			max-height: 100vh;
			object-fit: cover;
		}
	}
	.container {
		z-index: 2;
	}
	.gradient {
		z-index: 1;
		background: linear-gradient(transparent, black);
		opacity: 0.3;
	}
`;

const SliderMain = ({ children }) => {
	return (
		<Slider>
			<div className="image_background">
				<img src={House.src} alt="" />
			</div>
			<div className="gradient"></div>
			<div className="container">{children}</div>
		</Slider>
	);
};

export { SliderMain };
