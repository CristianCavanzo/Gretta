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
	.footer_bottom {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
	}
	.footer_bottom--center ul,
	.footer_bottom--rigth ul,
	.footer_bottom--rigth {
		display: flex;
		list-style: none;
		align-items: center;
		column-gap: 8px;
	}
	.footer_bottom--center {
		display: flex;
		align-items: flex-end;
	}
	.footer_bottom--center a {
		color: #000;
	}
`;

import Facebook from '@img/Facebook.png';
import Instagram from '@img/Instagram.png';
import LinkedIn from '@img/LinkedIn.png';
import Twitter from '@img/Twitter.png';
import Image from 'next/image';

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
				<div className="footer_bottom--rigth">
					<ul>
						<li>
							<a href="www.facebook.com">
								<Image src={Facebook} alt="Facebook" />
							</a>
						</li>
						<li>
							<a href="www.facebook.com">
								<Image src={Instagram} alt="Instagram" />
							</a>
						</li>
						<li>
							<a href="www.facebook.com">
								<Image src={LinkedIn} alt="LinkedIn" />
							</a>
						</li>
						<li>
							<a href="www.facebook.com">
								<Image src={Twitter} alt="Twitter" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</FooterComponent>
	);
};

export { Footer };
