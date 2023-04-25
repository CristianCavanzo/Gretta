import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const PreviewHouse = styled.div``;

interface IProps {
	images: {
		src: string;
		alt: string;
	};
	description: string;
}

const index = ({ images, description }: IProps) => {
	return (
		<PreviewHouse>
			<div className="previewHouse_container-image">
				<Image src={images.src} alt={images.alt} />
			</div>
			<div className="previewHouse_container-text">{description}</div>
		</PreviewHouse>
	);
};

export { index };
