import { Sizes } from 'types';

export type TitleSizes = Exclude<Sizes, 'xs' | 'xl' | 'xxl'>;
interface TitleProps {
	children: React.ReactNode;
	sizes: TitleSizes;
}

interface TitleComponentProps {
	size: number;
}
