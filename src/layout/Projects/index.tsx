import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Lines from '@img/lines_background.png';
import { Card } from './components/Card';
import Project1 from '@img/projects1.png';
import Project2 from '@img/projects2.png';
import Project3 from '@img/projects3.png';

const ProjectsComponent = styled.section<{ columns: string }>`
	background: #7e7f76;
	padding: 80px 40px;
	position: relative;
	.projects_container {
		display: grid;
		grid-template-columns: ${(props) => props.columns};
		transition: all ease-in-out 0.25s;
		gap: 24px;
	}
	.projects_lines {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		background: url(${Lines.src});
		background-size: cover;
		opacity: 0.3;
	}
	@media (max-width: 768px) {
		.projects_container {
			display: flex;
			flex-direction: column;
		}
	}
	@media (max-width: 425px) {
		padding: 40px 20px;
	}
`;

const Projects = () => {
	const CardInfo = [
		{
			image: {
				src: Project1.src,
				alt: 'Imagen de los proyectos',
			},
			text: 'Giorgia Gucci',
			active: true,
			subtitle: '',
		},
		{
			image: {
				src: Project2.src,
				alt: 'Imagen de los proyectos',
			},
			subtitle: 'Vistas de campo',
			text: 'Giorgia Gucci',
			active: false,
		},
		{
			image: {
				src: Project3.src,
				alt: 'Imagen de los proyectos',
			},
			subtitle: 'Vistas de campo',
			text: 'Giorgia Gucci',
			active: false,
		},
	];

	const [state, setState] = useState(CardInfo);
	const [idState, setIdState] = useState(0);
	const [columns, setColumns] = useState('2fr 1fr 1fr');

	const transformColumnWidth = (newActive: number) => {
		if (window.innerWidth > 768) {
			const columnsArray = ['1fr', '1fr', '1fr'];
			columnsArray[newActive] = '2fr';
			setColumns(columnsArray.join(' '));
		}
	};

	useEffect(() => {
		const newState = state;
		const indexActive = newState.findIndex((card) => card.active);
		newState[indexActive].active = false;
		newState[idState].active = true;
		setState(newState);
		transformColumnWidth(idState);
	}, [idState]);

	return (
		<ProjectsComponent columns={columns} id="projects">
			<div className="projects_lines"></div>
			<div className="projects_container">
				{state.map((card, key) => (
					<Card
						setIdState={setIdState}
						id={key}
						image={card.image}
						key={`projects_${key}`}
						active={card.active}
						subtitle={card.subtitle}
					>
						{card.text}
					</Card>
				))}
			</div>
		</ProjectsComponent>
	);
};

export { Projects };
