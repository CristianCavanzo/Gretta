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
	.selected .preview_gradient-image {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 3;
		border-radius: 8px;
		background-size: 300% 300%;
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
	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;
interface IProps {
	id: number;
	image: {
		src: string;
		alt: string;
	};
	name: string;
	selected: boolean;
}
const Preview = ({ image, name, selected, id }: IProps) => {
	const { setSliderImage, imagesSlider, setImagesSlider } = useContext(Context);

	const changeSlide = () => {
		setSliderImage(image.src);
		imagesSlider.find((image) => image.selected).selected = false;
		imagesSlider.find((image) => image.id === id).selected = true;
		setImagesSlider(imagesSlider);
	};

	return (
		<PreviewComponent onClick={changeSlide}>
			<div>
				<p>{name}</p>
			</div>
			<div className={`image-container ${selected && 'selected'}`}>
				<div className="preview_gradient-image"></div>
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
