import { roboto } from '@fonts';
import { useSize } from '@hooks/useSize';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TitleProps, TitleComponentProps } from './TitleSize';

const TitleComponent = styled.p<TitleComponentProps>`
	font-size: ${(props) => `${props.size}px`};
	font-weight: bold;
	text-transform: ${(props) => `${props.transform}`};
	line-height: 0.8em;
	color: ${(props) => `${props.color}`};
`;

const sizeToPxMap = {
	s: 50,
	m: 58,
	l: 64,
} as const;

const Title = ({ children, sizes, transform, color }: TitleProps) => {
	const size = useSize(sizes, sizeToPxMap);
	return (
		<TitleComponent color={color} transform={transform} className={roboto.className} size={size}>
			{children}
		</TitleComponent>
	);
};

export { Title };
