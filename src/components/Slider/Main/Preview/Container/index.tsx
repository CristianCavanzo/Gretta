import React from 'react';
import { IContainerSlider } from './containerSlider';
import { Preview } from '..';
import styled from 'styled-components';
const ContainerComponent = styled.div`
	display: flex;
	column-gap: 16px;
	align-items: end;
`;

interface IProps {
	preview: IContainerSlider[];
}

const Container = ({ preview }: IProps) => {
	return (
		<ContainerComponent>
			{preview.map((prop, key) => (
				<Preview
					image={prop.image}
					name={prop.name}
					selected={prop.selected}
					key={`preview_${key}`}
				/>
			))}
		</ContainerComponent>
	);
};

export { Container };
