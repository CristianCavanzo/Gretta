import React from 'react';
interface IPreview {
	title: string;
	image: string;
}
const Preview = ({ title }: IPreview) => {
	return (
		<div>
			<p>{title}</p>
			{/* <img src={image} alt="imagen" /> */}
		</div>
	);
};

export { Preview };
