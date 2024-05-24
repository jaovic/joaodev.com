import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
	background: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.headerText};
	padding: 1rem 2rem;
	text-align: center;
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<p>&copy; 2024 My Portfolio</p>
		</FooterContainer>
	);
};

export default Footer;
