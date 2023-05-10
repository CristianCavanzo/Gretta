import Text from '@components/Text';
import React from 'react';
import styled from 'styled-components';
import Lines from '@img/lines_background.png';

const ExperienciaComponent = styled.section`
	position: relative;
	background: #c3cdf0;
	.experiencia-container_text {
		max-width: 70%;
	}
	.experiencia-lines {
		z-index: 1;
		position: absolute;
		background: url(${Lines.src});
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-size: cover;
	}
	.experiencia {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 80px 40px;
		max-width: 100vw;
		row-gap: 20vh;
		z-index: 2;
		position: relative;
	}
	@media (max-width: 425px) {
		.experiencia {
			padding: 40px 20px;
		}
		.experiencia-container_text {
			max-width: 100%;
		}
		.experiencia-container_text .text-40 {
			font-size: 32px;
		}
	}
`;
const Experiencia = ({ children }) => {
	return (
		<ExperienciaComponent tabIndex={0}>
			<div className="experiencia">
				<Text className="text-uppercase text-bold">eyebrow here</Text>
				<div className="experiencia-container_text">
					<Text className="text-40 text-bold">{children}</Text>
				</div>
			</div>
			<div className="experiencia-lines"></div>
		</ExperienciaComponent>
	);
};

export { Experiencia };
