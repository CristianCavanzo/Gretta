import React from 'react';
import styled from 'styled-components';
import Lines from '@img/lines_background.png';
import { Card } from './components/Card';
import Project1 from '@img/projects1.png';
import Project2 from '@img/projects2.png';
import Project3 from '@img/projects3.png';

const ProjectsComponent = styled.section`
	background: #7e7f76;
	padding: 80px 40px;
	position: relative;
	.projects_container {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
	}
	.projects_lines {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		background: url(${Lines.src});
		opacity: 0.3;
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
		},
		{
			image: {
				src: Project2.src,
				alt: 'Imagen de los proyectos',
			},
			text: 'Giorgia Gucci',
		},
		{
			image: {
				src: Project3.src,
				alt: 'Imagen de los proyectos',
			},
			text: 'Giorgia Gucci',
		},
	];
	return (
		<ProjectsComponent>
			<div className="projects_lines"></div>
			<div className="projects_container">
				{CardInfo.map((card, key) => (
					<Card image={card.image} key={`projects_${key}`}>
						{card.text}
					</Card>
				))}
			</div>
		</ProjectsComponent>
	);
};

export { Projects };
