import { createContext } from 'react';
import { IProvider } from 'types';

export const Context = createContext<IProvider>({
	sliderImage: '',
	setSliderImage: () => {},
	imagesSlider: [
		{
			id: 0,
			image: { src: '', alt: '' },
			name: '',
			selected: true,
		},
	],
	setImagesSlider: () => {},
});
