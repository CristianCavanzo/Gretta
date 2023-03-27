import { SliderMain } from '@components/Slider/Main';
import { Title } from '@components/Titles';
import React, { Fragment } from 'react';

const Home = () => {
	return (
		<SliderMain>
			<Title transform="uppercase" sizes="l" color="white">
				Made better <br /> with Greta
			</Title>
		</SliderMain>
	);
};

export default Home;
