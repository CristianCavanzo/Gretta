import { ButtonPrincipal } from '@components/Buttons/Principal';
import { SliderMain } from '@components/Slider/Main';
import Text from '@components/Text';
import { Title } from '@components/Titles';
import { Experiencia } from 'layout/Experiencia';
import React, { Fragment } from 'react';
import styled from 'styled-components';
const ContentSlider = styled.div`
	display: flex;
	row-gap: 8px;
	flex-direction: column;
`;
const Home = () => {
	return (
		<Fragment>
			<SliderMain>
				<ContentSlider>
					<Text color="white" className="text-uppercase text-bold">
						eyebrow here
					</Text>
					<Title transform="uppercase" sizes="l" color="white">
						Made better <br /> with Greta
					</Title>
					<ButtonPrincipal>Ver nuestro trabajo</ButtonPrincipal>
				</ContentSlider>
			</SliderMain>
			<Experiencia />
		</Fragment>
	);
};

export default Home;
