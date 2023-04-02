import React from 'react';
import { Sizes } from 'types';

export type TitleSizes = Exclude<Sizes, 'xs' | 'xl' | 'xxl'>;
type TextTransform = 'uppercase' | 'capitalize' | 'lowercase';
export interface TitleProps {
	children: React.ReactNode;
	transform?: TextTransform;
	color?: string;
	sizes: TitleSizes;
}

export interface TitleComponentProps {
	size: number;
	transform: TextTransform;
	color?: string;
}
