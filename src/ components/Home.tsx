import React from "react";
import styled from "styled-components";

const HomeContainer = styled.main`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: blue;
	color: ${({ theme }) => theme.colors.text};
	padding: 2rem;
	min-height: calc(100vh - 4rem);
	margin: 0 2rem;
	padding-top: 6rem;
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const TextContainer = styled.div`
	flex: 1;
	padding-right: 2rem;
`;

const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

const Home: React.FC = () => {
	return (
		<HomeContainer>
			<ContentContainer>
				<TextContainer>
					<p>Seu texto aqui</p>
				</TextContainer>
				<ImageContainer></ImageContainer>
			</ContentContainer>
		</HomeContainer>
	);
};

export default Home;
