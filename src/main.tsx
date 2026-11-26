import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Download,
  Globe2,
  Code2,
  ShieldCheck,
  Terminal,
  ExternalLink,
  CheckCircle2,
  GitBranch,
  Menu,
  X,
} from "lucide-react";
import "./style.css";

const copy = {
  en: {
    nav: ["About", "Projects", "Skills", "Contact"],
    available: "OPEN TO QA OPPORTUNITIES",
    eyebrow: "QA AUTOMATION ENGINEER",
    headline: "Quality is engineered.",
    accent: "Not assumed.",
    intro:
      "I’m Juan Sebastián Giraldo. I build automated tests, validate APIs, verify database integrity, and help teams ship more reliable software.",
    projects: "Selected work",
    projectsSub: "Practical engineering. Verifiable results.",
    featured: "FEATURED PROJECT",
    automationProject: "AUTOMATION PROJECT",
    apiShield:
      "A banking REST API automation testing framework built with Playwright, TypeScript, Node.js, and PostgreSQL. Covers authentication, account management, financial transactions, database integrity, and concurrent operations.",
    apiTests: "106 automated tests passed",
    dbTests: "12 database tests passed",
    apiCI: "Full test suite passing on GitHub Actions",
    apiNote:
      "Includes positive and negative testing, JWT authentication, transaction integrity, concurrency testing, and a Docker-based PostgreSQL environment.",
    commerce:
      "An end-to-end and API testing project built with Playwright and TypeScript for an e-commerce application.",
    local: "7 tests passed locally",
    ci: "Independent CI smoke test passing on GitHub Actions",
    note: "The e-commerce app runs locally; full integration tests are not part of the hosted CI workflow.",
    repo: "View repository",
    pipeline: "View CI pipeline",
    webTitle: "Web development",
    web: "I also build responsive websites and work with WordPress and Elementor. This experience helps me understand software from both development and testing perspectives.",
    about: "About me",
    aboutText:
      "I earned a Software Quality Assurance diploma from the Canadian College of Technology and Business in 2025. My portfolio includes practical automation projects covering web applications, REST APIs, authentication, relational databases, and continuous integration. I am continuously improving my programming and software testing skills.",
    skills: "Tools & capabilities",
    contact: "Let’s build quality together.",
    contactText:
      "Interested in QA Automation, software testing, or collaborating on a project? Explore my work or reach out.",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    resume: "Download Resume",
    footer: "Built with React, TypeScript & attention to detail.",
  },
  es: {
    nav: ["Sobre mí", "Proyectos", "Habilidades", "Contacto"],
    available: "ABIERTO A OPORTUNIDADES EN QA",
    eyebrow: "INGENIERO DE AUTOMATIZACIÓN QA",
    headline: "La calidad se construye.",
    accent: "No se supone.",
    intro:
      "Soy Juan Sebastián Giraldo. Automatizo pruebas, valido APIs, verifico la integridad de bases de datos y ayudo a crear software más confiable.",
    projects: "Proyectos destacados",
    projectsSub: "Ingeniería práctica. Resultados verificables.",
    featured: "PROYECTO PRINCIPAL",
    automationProject: "PROYECTO DE AUTOMATIZACIÓN",
    apiShield:
      "Framework de automatización de pruebas para una API REST bancaria, desarrollado con Playwright, TypeScript, Node.js y PostgreSQL. Incluye autenticación, gestión de cuentas, transacciones financieras, integridad de bases de datos y operaciones concurrentes.",
    apiTests: "106 pruebas automatizadas aprobadas",
    dbTests: "12 pruebas de base de datos aprobadas",
    apiCI: "Suite completa aprobada en GitHub Actions",
    apiNote:
      "Incluye pruebas positivas y negativas, autenticación JWT, integridad de transacciones, pruebas de concurrencia y un entorno PostgreSQL con Docker.",
    commerce:
      "Proyecto de pruebas end-to-end y de API con Playwright y TypeScript para una aplicación de comercio electrónico.",
    local: "7 pruebas aprobadas localmente",
    ci: "Prueba smoke independiente aprobada en GitHub Actions",
    note: "La tienda funciona localmente; las pruebas de integración completas no se ejecutan en el CI alojado.",
    repo: "Ver repositorio",
    pipeline: "Ver pipeline de CI",
    webTitle: "Desarrollo web",
    web: "También desarrollo sitios responsivos y trabajo con WordPress y Elementor. Esta experiencia me ayuda a entender el software desde el desarrollo y las pruebas.",
    about: "Sobre mí",
    aboutText:
      "Obtuve un diploma en Software Quality Assurance del Canadian College of Technology and Business en 2025. Mi portafolio incluye proyectos prácticos de automatización para aplicaciones web, APIs REST, autenticación, bases de datos relacionales e integración continua. Continúo fortaleciendo mis habilidades de programación y pruebas de software.",
    skills: "Tecnologías y capacidades",
    contact: "Construyamos calidad juntos.",
    contactText:
      "¿Buscas talento en QA Automation o quieres colaborar en un proyecto? Explora mi trabajo o contáctame.",
    github: "Perfil de GitHub",
    linkedin: "Perfil de LinkedIn",
    resume: "Descargar CV",
    footer: "Creado con React, TypeScript y atención al detalle.",
  },
};

function App() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  const links = ["about", "projects", "skills", "contact"];

  return (
    <>
      <div className="ambient ambient1" />
      <div className="ambient ambient2" />

      <header className="header wrap">
        <a href="#top" className="brand">
          <span className="brand-mark">
            JG<span>.</span>
          </span>
          <span className="brand-sub">QUALITY ENGINEERING</span>
        </a>

        <nav className={menu ? "nav open" : "nav"}>
          {links.map((link, i) => (
            <a
              onClick={() => setMenu(false)}
              key={link}
              href={"#" + link}
            >
              {t.nav[i]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="lang"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            aria-label="Switch language"
          >
            <Globe2 size={15} />
            {lang.toUpperCase()}{" "}
            <span className="lang-muted">
              / {lang === "en" ? "ES" : "EN"}
            </span>
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-left">
            <div className="status">
              <span className="status-dot" />
              {t.available}
            </div>

            <div className="eyebrow">
              <span className="line" />
              {t.eyebrow}
            </div>

            <div className="hero-identity">
              <h1>Juan Sebastián Giraldo</h1>
              <h2>QA Automation Engineer</h2>
              <p className="hero-slogan">
                {t.headline} <span>{t.accent}</span>
              </p>
            </div>

            <p className="hero-description">{t.intro}</p>

            <div className="buttons">
              <a className="primary" href="#projects">
                {t.nav[1]} <ArrowUpRight size={17} />
              </a>

              <a
                className="secondary"
                href="https://github.com/aceg40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> GitHub
              </a>

              <a
                className="secondary"
                href="https://www.linkedin.com/in/juan-giraldo-ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>

              <a
                className="secondary"
                href="/cv/Juan_Giraldo_QA_Resume.pdf"
                download="Juan_Giraldo_QA_Resume.pdf"
              >
                <Download size={17} />
                {t.resume}
              </a>
            </div>

            <div className="hero-tags">
              <span>PLAYWRIGHT</span>
              <span>TYPESCRIPT</span>
              <span>API TESTING</span>
              <span>POSTGRESQL</span>
              <span>DOCKER</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="code-card">
              <div className="code-head">
                <div className="dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>quality-check.ts</span>

                <span className="code-head-icon">
                  <Terminal size={15} />
                </span>
              </div>

              <div className="code-body">
                <div>
                  <em>01</em>
                  <span className="purple">import</span>{" "}
                  {"{ test, expect }"}{" "}
                  <span className="purple">from</span>
                </div>

                <div>
                  <em>02</em>{" "}
                  <span className="green">'@playwright/test'</span>;
                </div>

                <div>
                  <em>03</em>
                </div>

                <div>
                  <em>04</em>
                  <span className="purple">test</span>(
                  <span className="green">'API health check'</span>,{" "}
                </div>

                <div>
                  <em>05</em>
                  <span className="blue">async</span>{" "}
                  ({"{ request }"}) =&gt; {"{"}
                </div>

                <div>
                  <em>06</em>
                  <span className="purple">const</span> response ={" "}
                  <span className="purple">await</span>
                </div>

                <div>
                  <em>07</em> request.get(
                  <span className="green">'/health'</span>);
                </div>

                <div>
                  <em>08</em> expect(response.status())
                </div>

                <div>
                  <em>09</em> .toBe(
                  <span className="blue">200</span>);
                </div>

                <div>
                  <em>10</em>
                  {"}"});
                </div>

                <div>
                  <em>11</em>
                </div>

                <div>
                  <em>12</em>
                  <span className="muted">
                    // Build confidence with every test.
                  </span>
                </div>
              </div>

              <div className="code-footer">
                <CheckCircle2 size={16} />
                <span>TEST AUTOMATION</span>
                <span className="code-footer-right">106 PASSED</span>
              </div>
            </div>

            <div className="floating-chip">
              <ShieldCheck size={17} /> Quality first, always.
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-kicker">01 / PORTFOLIO</div>
              <h2>{t.projects}</h2>
              <p>{t.projectsSub}</p>
            </div>
          </div>

          {/* APIShield-QA */}

          <div className="project-card">
            <div className="project-visual">
              <div className="visual-grid" />

              <div className="visual-window">
                <div className="visual-top">
                  <span>
                    <span className="green-dot" /> test run summary
                  </span>
                  <GitBranch size={15} />
                </div>

                <div className="visual-title">
                  APIShield-QA <span>✓</span>
                </div>

                <div className="visual-sub">
                  Playwright · TypeScript · PostgreSQL
                </div>

                <div className="visual-divider" />

                <div className="visual-result">
                  <CheckCircle2 size={17} />
                  {t.apiTests}
                </div>

                <div className="visual-result">
                  <CheckCircle2 size={17} />
                  {t.dbTests}
                </div>

                <div className="visual-result">
                  <CheckCircle2 size={17} />
                  {t.apiCI}
                </div>
              </div>
            </div>

            <div className="project-copy">
              <div className="section-kicker">{t.featured}</div>

              <h3>
                APIShield-QA <ArrowUpRight size={25} />
              </h3>

              <p>{t.apiShield}</p>

              <div className="pill-row">
                <span>Playwright</span>
                <span>TypeScript</span>
                <span>REST API</span>
                <span>PostgreSQL</span>
                <span>SQL</span>
                <span>Docker</span>
                <span>JWT</span>
                <span>Node.js</span>
                <span>GitHub Actions</span>
              </div>

              <p className="fineprint">{t.apiNote}</p>

              <a
                className="inline-link"
                href="https://github.com/aceg40/APIShield-QA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.repo}
                <ArrowUpRight size={17} />
              </a>

              <div style={{ marginTop: "12px" }}>
                <a
                  className="inline-link"
                  href="https://github.com/aceg40/APIShield-QA/actions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.pipeline}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* CommerceQA */}

          <div
            className="project-card"
            style={{ marginTop: "24px" }}
          >
            <div className="project-visual">
              <div className="visual-grid" />

              <div className="visual-window">
                <div className="visual-top">
                  <span>
                    <span className="green-dot" /> test run summary
                  </span>
                  <GitBranch size={15} />
                </div>

                <div className="visual-title">
                  CommerceQA <span>✓</span>
                </div>

                <div className="visual-sub">
                  Playwright · TypeScript
                </div>

                <div className="visual-divider" />

                <div className="visual-result">
                  <CheckCircle2 size={17} />
                  {t.local}
                </div>

                <div className="visual-result">
                  <CheckCircle2 size={17} />
                  {t.ci}
                </div>
              </div>
            </div>

            <div className="project-copy">
              <div className="section-kicker">
                {t.automationProject}
              </div>

              <h3>
                CommerceQA <ArrowUpRight size={25} />
              </h3>

              <p>{t.commerce}</p>

              <div className="pill-row">
                <span>Playwright</span>
                <span>TypeScript</span>
                <span>E2E</span>
                <span>API</span>
                <span>GitHub Actions</span>
              </div>

              <p className="fineprint">{t.note}</p>

              <a
                className="inline-link"
                href="https://github.com/aceg40/CommerceQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.repo}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Web Development */}

          <div className="web-card">
            <div className="web-icon">
              <Code2 size={23} />
            </div>

            <div>
              <h3>{t.webTitle}</h3>
              <p>{t.web}</p>

              <div className="pill-row">
                <span>WordPress</span>
                <span>Elementor</span>
                <span>Responsive UI</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap two-col" id="about">
          <div>
            <div className="section-kicker">02 / BACKGROUND</div>

            <h2>{t.about}</h2>

            <p className="body-copy">{t.aboutText}</p>

            <div className="education">
              <span>2025</span>

              <div>
                <strong>Software Quality Assurance</strong>
                <p>Canadian College of Technology and Business</p>
              </div>
            </div>
          </div>

          <div id="skills" className="skills-block">
            <div className="section-kicker">03 / TOOLKIT</div>

            <h2>{t.skills}</h2>

            <div className="skill-grid">
              {[
                ["Test Automation", "Playwright · E2E"],
                ["Programming", "TypeScript · JavaScript"],
                ["API Testing", "REST · HTTP · Assertions"],
                ["Database Testing", "PostgreSQL · SQL"],
                ["Authentication", "JWT · Access Control"],
                ["Concurrency Testing", "Transactions · Data Integrity"],
                ["CI/CD", "GitHub Actions · Git"],
                ["Containerization", "Docker · Docker Compose"],
                ["Backend", "Node.js · Express"],
                ["Frontend", "React · HTML · CSS"],
                ["Web Platforms", "WordPress · Elementor"],
                ["QA Techniques", "Positive · Negative · Regression"],
              ].map(([title, desc]) => (
                <div className="skill" key={title}>
                  <div className="skill-dot" />

                  <div>
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <div className="section-kicker">04 / CONNECT</div>

            <h2>{t.contact}</h2>

            <p>{t.contactText}</p>

            <a
              href="https://github.com/aceg40"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
            >
              <Github size={18} />
              {t.github}
              <ExternalLink size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/juan-giraldo-ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
              <Linkedin size={18} />
              {t.linkedin}
              <ExternalLink size={16} />
            </a>

            <a
              className="secondary"
              href="/cv/Juan_Giraldo_QA_Resume.pdf"
              download="Juan_Giraldo_QA_Resume.pdf"
            >
              <Download size={17} />
              {t.resume}
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>
          © {new Date().getFullYear()} Juan Sebastián Giraldo
        </span>

        <span>{t.footer}</span>

        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);