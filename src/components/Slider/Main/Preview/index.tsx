import Image from 'next/image';
import { Context } from '@context/index';
import React, { useContext } from 'react';
import styled from 'styled-components';

const PreviewComponent = styled.div`
	display: inline-block;
	width: 124px;
	text-align: center;
	cursor: pointer;
	p {
		padding-bottom: 8px;
		color: white;
		font-weight: 600;
	}
	.selected {
		outline: 2px solid #ff700a;
		border-radius: 8px;
	}
	.image-container {
		padding: 2px;
		position: relative;
		height: 80px;
	}
	@media (max-width: 1200px) {
		width: 120px;
	}
	@media (max-width: 510px) {
		width: 80px;
		.image-container {
			height: 60px;
		}
	}
	@media (max-width: 370px) {
		width: 60px;
		.image-container {
			height: 40px;
		}
	}
`;
interface IProps {
	image: {
		src: string;
		alt: string;
	};
	name: string;
	selected: boolean;
}
const Preview = ({ image, name, selected }: IProps) => {
	const { setSliderImage } = useContext(Context);
	const changeSlide = () => {
		setSliderImage(image.src);
	};
	return (
		<PreviewComponent onClick={changeSlide}>
			<div>
				<p>{name}</p>
			</div>
			<div className={`image-container ${selected && 'selected'}`}>
				<Image
					src={image.src}
					alt={image.alt}
					className="border-radious-8"
					style={{ objectFit: 'cover' }}
					quality="100"
					fill
				/>
			</div>
		</PreviewComponent>
	);
};

export { Preview };
