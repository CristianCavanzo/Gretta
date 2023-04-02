import React from 'react';
import styled from 'styled-components';
interface IProps {
	color?: string;
	className?: string;
	children: React.ReactNode;
}
interface IComponent extends Omit<IProps, 'children' | 'className'> {}
const TextComponent = styled.p<IComponent>`
	color: ${(props) => props.color || 'black'};
`;
const Text = ({ children, ...props }: IProps) => {
	return <TextComponent {...props}>{children}</TextComponent>;
};

export default Text;
