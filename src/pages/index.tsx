import { ButtonPrincipal } from '@components/Buttons/Principal';
import { SliderMain } from '@components/Slider/Main';
import Text from '@components/Text';
import { Title } from '@components/Titles';
import { Experiencia } from 'layout/Experiencia';
import { CTA } from 'layout/CTA';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Portfolio } from 'layout/Portfolio';
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
			<Experiencia>
				&nbsp; &nbsp; With over 20 years of architectural practise experience, we combine spatial,
				expressive, and technical skills to deliver efficient buildings of lasting value.
			</Experiencia>
			<CTA />
			<Portfolio></Portfolio>
		</Fragment>
	);
};

export default Home;
