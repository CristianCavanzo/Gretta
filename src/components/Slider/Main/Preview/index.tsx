import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const PreviewComponent = styled.div`
	display: inline-block;
	.selected {
		outline: 2px solid #ff700a;
		border-radius: 8px;
	}
	.image-container {
		padding: 2px;
	}
`;
interface IProps {
	image: {
		src: string;
		alt: string;
	};
	name: string;
}
const Preview = ({ image, name }: IProps) => {
	return (
		<PreviewComponent>
			<div>
				<p>{name}</p>
			</div>
			<div className="image-container selected">
				<Image
					src={image.src}
					width={120}
					height={80}
					alt={image.alt}
					className="border-radious-8"
					style={{ objectFit: 'cover' }}
					quality="100"
				/>
			</div>
		</PreviewComponent>
	);
};

export { Preview };
