import { roboto } from '@fonts';
import { useSize } from '@hooks/useSize';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TitleProps, TitleComponentProps } from './TitleSize';

const TitleComponent = styled.p<TitleComponentProps>`
	font-size: ${(props) => `${props.size}px`};
	font-weight: bold;
`;

const sizeToPxMap = {
	s: 32,
	m: 40,
	l: 48,
} as const;

const Title = ({ children, sizes }: TitleProps) => {
	const size = useSize(sizes, sizeToPxMap);
	return (
		<TitleComponent className={roboto.className} size={size}>
			{children}
		</TitleComponent>
	);
};

export { Title };
