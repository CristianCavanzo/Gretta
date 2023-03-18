import React from 'react';
import styled from 'styled-components';

interface TitleProps {
	children: React.ReactNode;
	sizes: '40' | '48' | '56' | '64' | '72';
}

interface TitleComponentProps extends Omit<TitleProps, 'children'> {}

const TitleComponent = styled.p<TitleComponentProps>``;

const Title = ({ children, sizes }: TitleProps) => {
	return <TitleComponent sizes={sizes}>{children}</TitleComponent>;
};

export { Title };
