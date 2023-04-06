import { ButtonPrincipal } from '@components/Buttons/Principal';
import { SliderMain } from '@components/Slider/Main';
import Text from '@components/Text';
import { Title } from '@components/Titles';
import React from 'react';

const Home = () => {
	return (
		<SliderMain>
			<div>
				<Text color="white" className="text-uppercase text-bold">
					eyebrow here
				</Text>
				<Title transform="uppercase" sizes="l" color="white">
					Made better <br /> with Greta
				</Title>
				<ButtonPrincipal>Ver nuestro trabajo</ButtonPrincipal>
			</div>
		</SliderMain>
	);
};

export default Home;
