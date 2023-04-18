import { IContainerSlider } from '@components/Slider/Main/Preview/Container/containerSlider';
import { Dispatch, SetStateAction } from 'react';

export type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface IProvider {
	sliderImage: string;
	setSliderImage: Dispatch<SetStateAction<string>>;
	imagesSlider: IContainerSlider[];
	setImagesSlider: Dispatch<SetStateAction<IContainerSlider[]>>;
}
