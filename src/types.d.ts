import { Dispatch, SetStateAction } from 'react';

export type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface IProvider {
	sliderId: number;
	setSliderId: Dispatch<SetStateAction<number>>;
}
