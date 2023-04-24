import Text from '@components/Text';
import React from 'react';
import styled from 'styled-components';
const ExperienciaComponent = styled.section`
	background: #c3cdf0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 80px 40px;
	max-width: 100vw;
	row-gap: 20vh;
	position: relative;

	.experiencia-container_text {
		max-width: 70%;
	}
	.experiencia-lines {
		position: absolute;
		background: url('public/img/lines_background.png');
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;
const Experiencia = () => {
	return (
		<ExperienciaComponent>
			<Text className="text-uppercase text-bold">eyebrow here</Text>
			<div className="experiencia-container_text">
				<Text className="text-40 text-bold">
					With over 20 years of architectural practise experience, we combine spatial, expressive,
					and technical skills to deliver efficient buildings of lasting value.
				</Text>
			</div>
			<div className="experiencia-lines"></div>
		</ExperienciaComponent>
	);
};

export { Experiencia };
