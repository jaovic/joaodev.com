import React from "react";
import styled from "styled-components";

const HomeContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.text};
	padding: 2rem;
	min-height: calc(100vh - 4rem);
	margin: 0 2rem;
	padding-top: 6rem;
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const TextContainer = styled.div`
	flex: 1;
	max-width: 600px;
	text-align: center;
`;

const Home: React.FC = () => {
	return (
		<HomeContainer id="home">
			<ContentContainer>
				<TextContainer>
					<p>
						Meu nome é <strong>João Victor Martins</strong>, desenvolvedor{" "}
						<strong>Full Stack</strong> com paixão por tecnologia desde criança.{" "}
						<br />
						<br />
						Iniciei minha carreira no <strong>Back-End</strong>, aprofundando-me
						em <strong>segurança da informação</strong> e{" "}
						<strong>redes de computadores</strong>. Minha experiência abrange
						arquitetura de sistemas, proteção de dados e integração de serviços.{" "}
						<br />
						<br />
						No <strong>Front-End</strong>, aplico boas práticas para garantir
						interfaces eficientes e responsivas, sempre focado em desempenho e
						segurança.
					</p>
				</TextContainer>
			</ContentContainer>
		</HomeContainer>
	);
};

export default Home;
