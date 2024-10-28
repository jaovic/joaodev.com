// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const title = "JOAODEV.COM";

const resources = {
	en: {
		translation: {
			title,
			welcome: "Welcome to my portfolio",
			description: `Full stack developer with 3 years of experience, specialized in Vue.js, React, Nest.js, and Node.js.\n\nThroughout his career, he has worked on complex solutions for fintechs and the development of robust and secure banking APIs.\n\nHe has solid knowledge of frontend and backend development, integration with financial systems, and implementation of security practices.`,
			experience: "Experience",
			position: "Position",
			about: "About Me",
			projects: "Personal Projects",
			skills: "Skills",
			testimonials: "Testimonials",
			contact: "Contact",
		},
	},
	pt: {
		translation: {
			title,
			welcome: "Bem-vindo ao meu portfólio",
			description: `Desenvolvedor full stack com 3 anos de experiência, especializado em Vue.js, React, Nest.js e Node.js.\n\nDurante sua carreira, trabalhou em soluções complexas para fintechs e no desenvolvimento de APIs bancárias robustas e seguras.\n\nPossui sólidos conhecimentos de desenvolvimento frontend e backend, integração com sistemas financeiros e implementação de práticas de segurança.`,
			experience: "Experiência",
			position: "Posição",
			about: "Sobre Mim",
			projects: "Projetos Pessoais",
			skills: "Habilidades",
			testimonials: "Depoimentos",
			contact: "Contato",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "pt", // Defina o idioma padrão aqui
	interpolation: {
		escapeValue: false, // React já escapa as variáveis
	},
});

export default i18n;
