import React, { Fragment } from 'react';
import styled from 'styled-components';
import Arrow from '@icons/arrow.svg';
import Image from 'next/image';
import { montserrat } from 'pages/_app';

const Button = styled.button`
	display: inline-flex;
	max-width: fit-content;
	background: #000;
	padding: 12px;
	color: #fff;
	outline: none;
	border: none;
	display: flex;
	justify-content: space-between;
	column-gap: 24px;
	font-size: 16px;
	align-items: center;
	cursor: pointer;
	text-transform: uppercase;
	position: relative;
	margin-top: 12px;
	font-weight: 600;
	::before {
		position: absolute;
		left: 0%;
		right: 0;
		top: -11px;
		clip-path: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
		height: 12px;
		content: '';
		background-color: #000;
		color: white;
		display: flex;
		font-size: 20px;
	}
	:focus {
		box-shadow: 0 0 7px 5px #00000096;
	}
`;

const ButtonPrincipal = ({ children }) => {
	return (
		<Fragment>
			<Button className={`${montserrat.className}`}>
				{children}
				<Image src={Arrow} alt="arrow icon" width={12} height={12} />
			</Button>
		</Fragment>
	);
};

export { ButtonPrincipal };
