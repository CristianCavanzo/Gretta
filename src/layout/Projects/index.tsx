import React from 'react';
import styled from 'styled-components';
import Lines from '@img/lines_background.png';

const ProjectsComponent = styled.section`
	background: #7e7f76;
	padding: 80px 40px;
	position: relative;
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
	return (
		<ProjectsComponent>
			<div className="projects_lines"></div>
			<div className="projects_container"></div>
		</ProjectsComponent>
	);
};

export { Projects };
