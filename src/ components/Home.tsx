import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HomeContainer = styled.main`
	background: ${({ theme }) => theme.colors.body};
	color: ${({ theme }) => theme.colors.text};
	text-align: center;
	padding: 2rem;
	min-height: calc(100vh - 8rem);
`;

const Home: React.FC = () => {
	const { t } = useTranslation();

	return (
		<HomeContainer>
			<h2>{t("welcome")}</h2>
			<p>{t("description")}</p>
		</HomeContainer>
	);
};

export default Home;
