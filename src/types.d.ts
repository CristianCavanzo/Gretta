import { Dispatch, SetStateAction } from 'react';

export type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface IContainerSlider {
	id: number;
	image: {
		src: string;
		alt: string;
	};
	name: string;
	selected: boolean;
}

export interface IProvider {
	sliderImage: string;
	setSliderImage: Dispatch<SetStateAction<string>>;
	imagesSlider: IContainerSlider[];
	setImagesSlider: Dispatch<SetStateAction<IContainerSlider[]>>;
}
