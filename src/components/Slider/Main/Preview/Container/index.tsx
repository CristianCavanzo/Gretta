import React from 'react';
import { IContainerSlider } from './containerSlider';
import { Preview } from '..';
import styled from 'styled-components';
import { roboto } from 'pages/_app';
const ContainerComponent = styled.div`
	display: flex;
	column-gap: 16px;
	align-items: end;
	.containerPreview_numbers {
		height: 84px;
		display: flex;
		align-items: center;
		color: white;
		font-weight: bold;
		font-size: 20px;
	}
`;

interface IProps {
	preview: IContainerSlider[];
}

const ContainerPreview = ({ preview }: IProps) => {
	return (
		<ContainerComponent>
			<div className={`containerPreview_numbers ${roboto.className}`}>
				<p>1</p>
			</div>
			{preview.map((prop, key) => (
				<Preview
					image={prop.image}
					name={prop.name}
					selected={prop.selected}
					key={`preview_${key}`}
				/>
			))}
			<div className={`containerPreview_numbers ${roboto.className}`}>
				<p>{preview.length}</p>
			</div>
		</ContainerComponent>
	);
};

export { ContainerPreview };
