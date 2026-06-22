import { m as base } from "../../chunks/environment.js";
import { R as attr, a as element, i as derived, n as attr_style, o as ensure_array_like, s as head, z as escape_html } from "../../chunks/dev.js";
import "../../chunks/paths.js";
//#region src/lib/components/Nav.svelte
function Nav($$renderer) {
	$$renderer.push(`<nav class="nav svelte-1h32yp1"><div class="container svelte-1h32yp1"><a href="#top" class="logo svelte-1h32yp1"><span class="logo-box svelte-1h32yp1">NR</span> <span class="name svelte-1h32yp1">Nicolò Riglietti</span></a> <div class="links svelte-1h32yp1"><a href="#progetti" class="svelte-1h32yp1">Progetti</a> <a href="#about" class="svelte-1h32yp1">Chi sono</a></div></div></nav>`);
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer) {
	$$renderer.push(`<section id="top" class="hero svelte-1q37ri0"><div class="grid-bg svelte-1q37ri0" aria-hidden="true"></div> <div class="container svelte-1q37ri0"><div class="kicker svelte-1q37ri0"><span class="line svelte-1q37ri0"></span> <span>Portfolio · Educazione civica</span></div> <h1 class="title svelte-1q37ri0">Cittadinanza,<br/> <span class="accent svelte-1q37ri0">in pratica.</span></h1> <p class="subtitle svelte-1q37ri0">Una raccolta dei miei lavori scolastici di educazione civica:
      siti web, immagini e presentazioni per esplorare diritti, doveri
      e responsabilità del vivere insieme.</p> <div class="actions svelte-1q37ri0"><a href="#progetti" class="btn-primary svelte-1q37ri0">Vedi i progetti <span>→</span></a> <a href="#about" class="btn-secondary svelte-1q37ri0">Conoscimi</a></div></div></section>`);
}
//#endregion
//#region src/lib/data/projects.js
var projects = [
	{
		id: "1",
		title: "La prigione domestica",
		description: "Un'analisi approfondita sulla violenza domestica e il femminicidio in Italia, con focus sul numero 1522 come risorsa di aiuto per le vittime.",
		type: "PDF",
		year: "2025",
		topic: "Diritti umani",
		url: "/la_prigione_domestica.pdf",
		cover: "/covers/image9.png",
		schoolYear: "5"
	},
	{
		id: "2",
		title: "1522",
		description: "Sito web interattivo dedicato al numero nazionale anti-violenza e stalking, con informazioni su come riconoscere e segnalare abusi.",
		type: "website",
		year: "2026",
		topic: "Diritti umani",
		url: "#",
		cover: "/covers/image.png",
		schoolYear: "5"
	},
	{
		id: "3",
		title: "'Ndrangheta",
		description: "Presentazione sui meccanismi di infiltrazione della criminalità organizzata calabrese negli assetti economici e politici italiani.",
		type: "slides",
		year: "2024",
		topic: "Legalità",
		url: "/'NDRANGHETA.pdf",
		cover: "/covers/image2.png",
		schoolYear: "3"
	},
	{
		id: "4",
		title: "Calcolatore codice fiscale",
		description: "Applicazione in C che calcola il codice fiscale italiano partendo dai dati personali, approfondendo la struttura e la funzione di questo identificativo.",
		type: "code",
		year: "2024",
		topic: "Cittadinanza digitale",
		url: "https://github.com/Riglietti-Nicolo/Calcolatore_codice_fiscale/tree/main",
		cover: "/covers/image3.png",
		schoolYear: "3"
	},
	{
		id: "5",
		title: "Il sistema dei lager nazisti",
		description: "Analisi storica dei campi di concentramento e sterminio durante il regime nazista, con focus sui meccanismi di oppressione e genocidio.",
		type: "slides",
		year: "2026",
		topic: "Memoria storica",
		url: "/Anatomy_of_Atrocity.pptx.pdf",
		cover: "/covers/image6.png",
		schoolYear: "5"
	},
	{
		id: "6",
		title: "Operazione T4",
		description: "Ricerca sul programma di eutanasia forzata nazista, uno dei precursori dell'Olocausto e violazione sistematica dei diritti umani.",
		type: "slides",
		year: "2026",
		topic: "Memoria storica",
		url: "/The_Cold_Ledger.pptx.pdf",
		cover: "/covers/image5.png",
		schoolYear: "5"
	},
	{
		id: "7",
		title: "Operazione LEBENSBORN",
		description: "Studio del programma riproduttivo nazista volto a creare una 'razza superiore', esempio di ideologia razziale applicata a livello demografico.",
		type: "image",
		year: "2026",
		topic: "Memoria storica",
		url: "/covers/image4.png",
		cover: "/covers/image4.png",
		schoolYear: "5"
	},
	{
		id: "8",
		title: "Quiz patente B",
		description: "Applicazione interattiva in Python e Tkinter per prepararsi all'esame teorico della patente di guida, con domande ufficiali e feedback immediato.",
		type: "code",
		year: "2026",
		topic: "Cittadinanza digitale",
		url: "https://github.com/Riglietti-Nicolo/Quiz_patenteB/tree/main/quiz_patente",
		cover: "/covers/image7.png",
		schoolYear: "4"
	},
	{
		id: "9",
		title: "La Mattanza - Carlo Lucarelli",
		description: "Analisi del fenomeno della violenza mafiosa in Sicilia attraverso il romanzo di Carlo Lucarelli, esplorando le dinamiche di potere e le vittime della criminalità organizzata.",
		type: "book",
		year: "2024",
		topic: "Legalità",
		url: "#",
		cover: "/covers/image8.png",
		schoolYear: "3"
	},
	{
		id: "10",
		title: "movimento del '68",
		description: "Analisi del fenomeno della violenza mafiosa in Sicilia attraverso il romanzo di Carlo Lucarelli, esplorando le dinamiche di potere e le vittime della criminalità organizzata.",
		type: "slides",
		year: "2026",
		topic: "Legalità",
		url: "/Sessantotto.pdf",
		cover: "/covers/image11.png",
		schoolYear: "5"
	},
	{
		id: "11",
		title: "La costituzione",
		description: "Analisi del fenomeno della violenza mafiosa in Sicilia attraverso il romanzo di Carlo Lucarelli, esplorando le dinamiche di potere e le vittime della criminalità organizzata.",
		type: "slides",
		year: "2026",
		topic: "Legalità",
		url: "/la_costituzione.pdf",
		cover: "/covers/image10.png",
		schoolYear: "5"
	},
	{
		id: "12",
		title: "La costituzione",
		description: "Analisi del fenomeno della violenza mafiosa in Sicilia attraverso il romanzo di Carlo Lucarelli, esplorando le dinamiche di potere e le vittime della criminalità organizzata.",
		type: "slides",
		year: "2026",
		topic: "Legalità",
		url: "/presentazione_amish.pdf",
		schoolYear: "4"
	},
	{
		id: "13",
		title: "Incontro con Roberto Saviano",
		description: "Incontro con Roberto Saviano a partire dal libro \"L'amore mio non muore\": riflessione sul coraggio civile, la narrativa come strumento di denuncia e il prezzo personale della lotta alla criminalità.",
		type: "",
		year: "2026",
		topic: "Legalità",
		schoolYear: "5"
	}
];
//#endregion
//#region src/lib/components/ProjectCard.svelte
function ProjectCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { project, index } = $$props;
		const typeLabel = {
			website: "Sito web",
			image: "Immagine",
			slides: "Slides",
			PDF: "PDF",
			code: "code",
			book: "Libro"
		};
		const typeIcon = {
			website: "",
			image: "",
			slides: ""
		};
		const tag = derived(() => project.url ? "a" : "div");
		const isExternalLink = derived(() => project.url?.startsWith("http") ?? false);
		const coverStyle = derived(() => project.cover ? `background-image: url('${base}${project.cover}'); background-size: cover; background-position: center;` : "");
		element($$renderer, tag(), () => {
			$$renderer.push(`${attr("href", isExternalLink() ? project.url : base + project.url || void 0)}${attr("target", isExternalLink() ? "_blank" : void 0)}${attr("rel", isExternalLink() ? "noopener noreferrer" : void 0)} class="card svelte-oviq8z"`);
		}, () => {
			$$renderer.push(`<div class="cover svelte-oviq8z"${attr_style(coverStyle())}>`);
			if (!project.cover) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="gradient svelte-oviq8z" aria-hidden="true"></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div class="icon-container svelte-oviq8z"><span class="icon svelte-oviq8z">${escape_html(typeIcon[project.type])}</span></div> <div class="header svelte-oviq8z"><span class="type-label svelte-oviq8z">${escape_html(typeLabel[project.type])}</span> <span class="index svelte-oviq8z">${escape_html(String(index + 1).padStart(2, "0"))}</span></div></div> <div class="content svelte-oviq8z"><div class="title-section svelte-oviq8z"><h3 class="svelte-oviq8z">${escape_html(project.title)}</h3> <span class="year svelte-oviq8z">${escape_html(project.year)}</span></div> <p class="description svelte-oviq8z">${escape_html(project.description)}</p> <div class="footer svelte-oviq8z"><span class="topic svelte-oviq8z">${escape_html(project.topic)}</span> `);
			if (project.url) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="link svelte-oviq8z">Apri →</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div>`);
		});
	});
}
//#endregion
//#region src/lib/components/Projects.svelte
function Projects($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const projectsByYear = {
			3: projects.filter((p) => p.schoolYear === "3"),
			4: projects.filter((p) => p.schoolYear === "4"),
			5: projects.filter((p) => p.schoolYear === "5")
		};
		const years = [
			3,
			4,
			5
		];
		const yearLabels = {
			3: "Terza",
			4: "Quarta",
			5: "Quinta"
		};
		$$renderer.push(`<section id="progetti" class="svelte-1tes396"><!--[-->`);
		const each_array = ensure_array_like(years);
		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let year = each_array[$$index_1];
			if (projectsByYear[year].length > 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="year-section svelte-1tes396"><div class="container svelte-1tes396"><h2 class="year-title svelte-1tes396">Classe ${escape_html(yearLabels[year])}</h2> <div class="grid svelte-1tes396"><!--[-->`);
				const each_array_1 = ensure_array_like(projectsByYear[year]);
				for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
					let project = each_array_1[i];
					ProjectCard($$renderer, {
						project,
						index: i
					});
				}
				$$renderer.push(`<!--]--></div></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></section>`);
	});
}
//#endregion
//#region src/lib/components/About.svelte
function About($$renderer) {
	$$renderer.push(`<section id="about" class="svelte-7hpc9t"><div class="container svelte-7hpc9t"><div class="grid svelte-7hpc9t"><div class="left-col svelte-7hpc9t"><div class="kicker svelte-7hpc9t"><span class="line svelte-7hpc9t"></span> <span class="text svelte-7hpc9t">Chi sono</span></div> <h2 class="svelte-7hpc9t">Nicolò <br/> Riglietti</h2></div> <div class="right-col svelte-7hpc9t"><p class="main-text svelte-7hpc9t">Questo portfolio raccoglie i progetti che ho realizzato nel
          percorso scolastico di educazione civica. Ogni lavoro è un
          modo per esplorare temi che ritengo importanti: i diritti,
          la sostenibilità, la responsabilità collettiva.</p> <p class="secondary-text svelte-7hpc9t">Uso strumenti diversi a seconda di cosa voglio comunicare:
          un sito web per esperienze interattive, un'immagine quando
          serve impatto visivo, una presentazione per approfondimenti
          strutturati.</p> <dl class="stats svelte-7hpc9t"><div class="stat svelte-7hpc9t"><dt class="svelte-7hpc9t">Formati</dt> <dd class="svelte-7hpc9t">Web · Img · Slides</dd></div> <div class="stat svelte-7hpc9t"><dt class="svelte-7hpc9t">Materia</dt> <dd class="svelte-7hpc9t">Ed. civica</dd></div> <div class="stat svelte-7hpc9t"><dt class="svelte-7hpc9t">Anno</dt> <dd class="svelte-7hpc9t">2024–25</dd></div></dl></div></div></div></section>`);
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		$$renderer.push(`<footer class="svelte-jz8lnl"><div class="container svelte-jz8lnl"><p class="copyright svelte-jz8lnl">© ${escape_html(year)} Nicolò Riglietti</p> <p class="tagline svelte-jz8lnl">Portfolio · Educazione civica</p></div></footer>`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Nicolò Riglietti — Portfolio Educazione Civica</title>`);
		});
		$$renderer.push(`<meta name="description" content="Raccolta di progetti scolastici di educazione civica di Nicolò Riglietti: siti web, immagini e presentazioni su diritti, Costituzione e sostenibilità."/>`);
	});
	$$renderer.push(`<main class="min-h-screen bg-background text-foreground">`);
	Nav($$renderer, {});
	$$renderer.push(`<!----> `);
	Hero($$renderer, {});
	$$renderer.push(`<!----> `);
	Projects($$renderer, {});
	$$renderer.push(`<!----> `);
	About($$renderer, {});
	$$renderer.push(`<!----> `);
	Footer($$renderer, {});
	$$renderer.push(`<!----></main>`);
}
//#endregion
export { _page as default };
