import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const AboutContainer = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: pink;
	color: ${({ theme }) => theme.colors.text};
	padding: 2rem;
	margin: 0 2rem;
	padding-top: 6rem;
	min-height: 100vh;
`;

const Contact: React.FC = () => {
	const { t } = useTranslation();

	return <AboutContainer id="contact"></AboutContainer>;
};

export default Contact;
