import { ButtonPrincipal } from '@components/Buttons/Principal';
import { Title } from '@components/Titles';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
const FooterComponent = styled.footer`
	padding: 80px 40px;
	.footer_top {
		display: grid;
		grid-template-columns: 1fr 1fr;
		.footer_topRigth {
			justify-self: center;
			ul {
				list-style: none;
				display: grid;
				row-gap: 6px;
				a {
					text-decoration: none;
					color: #000;
				}
			}
		}
		.footer_topLeft {
			display: grid;
			row-gap: 20px;
		}
	}
`;

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<FooterComponent>
			<section className="footer_top">
				<div className="footer_topLeft">
					<Title sizes="m" transform="uppercase">
						Dos decadas de experiencia
					</Title>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eaque
						repellat deleniti libero ipsam. Laboriosam hic iusto eveniet, quidem obcaecati quis
						culpa similique eum doloremque tempore. Nemo, ipsum sunt!
					</p>
				</div>
				<div className="footer_topRigth">
					<nav>
						<ul>
							<li>
								<a href={'#projects'}>Projects</a>
							</li>
							<li>
								<a href={'#projects'}>Process</a>
							</li>
							<li>
								<a href={'#projects'}>About</a>
							</li>
							<li>
								<a href={'#projects'}>Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</section>
			<section className="footer_bottom">
				<div className="footer_bottom--left">
					<ButtonPrincipal>Obtenlo</ButtonPrincipal>
				</div>
				<div className="footer_bottom--center">
					<ul>
						<li>{year} Gretta. Todos los derechos reservados</li>
						<li>
							<Link href="/">Politicas de privacidad</Link>
						</li>
						<li>
							<Link href="/">Terminos del servicio</Link>
						</li>
					</ul>
				</div>
				<div className="footer_bottom--rigth"></div>
			</section>
		</FooterComponent>
	);
};

export { Footer };
