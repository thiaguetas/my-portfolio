import React, { useState, useEffect } from "react";
import "./app.css";
import noBackgroundLogo from "./assets/png/logo-no-background.png";
import logoBlack from "./assets/png/logo-black.png";
import logoWhite from "./assets/png/logo-white.png";
import project1 from "./assets/projects/Ecommerce.jpg";
import project2 from "./assets/projects/wcweb.png";
import project3 from "./assets/projects/colibriweb.png";
import project4 from "./assets/projects/golf.png";
import englishCv from "./assets/docs/cvEnglish.pdf";
import spanishCv from "./assets/docs/cvSpanish.pdf";
import sequelizeIcon from "./assets/icons/svg/sequelizeIcon.svg";
import postgresIcon from "./assets/icons/png/postgres.png";
import muiIcon from "./assets/icons/png/mui.png";
import styledcoIcon from "./assets/icons/png/styledco.png";
import reduxIcon from "./assets/icons/png/redux.png";

function App() {
  const [spanish, setSpanish] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleSelect = (e) => {
    setSpanish(!spanish);
  };

  useEffect(() => {}, [spanish]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container">
      <div
        className="menu"
        style={menu ? { display: "flex" } : { display: "none" }}
      >
        <button>
          <i class="fa-solid fa-x" onClick={handleMenu}></i>
        </button>
        <div>
          <img src={logoWhite} />
        </div>
        <a href="#stack" onClick={handleMenu}>
          {spanish ? "Stack" : "Stack"}
        </a>
        <a href="#projects" onClick={handleMenu}>
          {spanish ? "Proyecto" : "Projects"}
        </a>
        <a href="#about" onClick={handleMenu}>
          {spanish ? "About" : "About"}
        </a>
        <a href="#contact" onClick={handleMenu}>
          {spanish ? "Contacto" : "Contact"}
        </a>
        <i class="fa-solid fa-globe"></i>
        <h3>{spanish ? "Idioma" : "Language"}</h3>
        <select onChange={handleSelect}>
          <option value={true}>Spanish</option>
          <option value={false}>English</option>
        </select>
      </div>
      <header>
        <nav>
          <div className="left-side-nav">
            <a href="#">
              <img src={logoWhite} />
            </a>
          </div>
          <div className="right-side-nav">
            <ul>
              <li>
                <a href="#stack">Stack</a>
              </li>
              <li>
                <a href="#projects">{spanish ? "Proyectos" : "Projects"}</a>
              </li>
              <li>
                <a href="#about">{spanish ? "About" : "About"}</a>
              </li>
              <li>
                <a href="#contact">{spanish ? "Contacto" : "Contact"}</a>
              </li>
              <li>
                <select onChange={handleSelect}>
                  <option value={true}>Spanish</option>
                  <option value={false}>English</option>
                </select>
              </li>
            </ul>
            <button className="menu-btn" onClick={handleMenu}>
              <i className="fa-sharp fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-one">
            <h1>
              {spanish
                ? "Hola! Mi nombre es Thiago"
                : "Hi there! My name is Thiago"}
            </h1>
          </div>
          <div className="hero-two">
            <h1>
              {spanish
                ? "Soy desarrollador Fullstack"
                : "I'm a Fullstack Developer"}
            </h1>
          </div>
        </div>
      </header>
      <div className="body-container">
        <section id="stack" className="stack">
          <h1>Stack</h1>
          <h3>
            {spanish
              ? "Hac?? click en los botones del stack para encenderlos!"
              : "Click on the stack buttons to turn them on!"}
          </h3>
          <ul>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-html5"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-square-js"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-react"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>
                <i className="fa-brands fa-node"></i>
              </div>
            </li>
            <li>
              <input type="checkbox" />
              <div>C#</div>
            </li>
            <li>
              <input type="checkbox" />
              <div className="sql">SQL</div>
            </li>
          </ul>
          <ul className="not-lighted">
            <li>
              <div>
                <img src={sequelizeIcon} />
              </div>
            </li>
            <li>
              <div className="express">express</div>
            </li>
            <li>
              <div>
                <img src={postgresIcon} />
              </div>
            </li>
            <li>
              <div>
                <img src={muiIcon} />
              </div>
            </li>
            <li>
              <div>
                <img src={styledcoIcon} />
              </div>
            </li>
            <li>
              <div>
                <img src={reduxIcon} />
              </div>
            </li>
          </ul>
          {/* <ul>
            <li>
              <i className="fa-brands fa-html5"></i>
            </li>
            <li>
              <i className="fa-brands fa-css3-alt"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-js"></i>
            </li>
            <li>
              <i className="fa-brands fa-react"></i>
            </li>
            <li>
              <i className="fa-brands fa-node"></i>
            </li>
            <li>
              <img src={sqlIcon} alt="sql icon" />
            </li>
            <li>
              <img src={sharpIcon} alt="c sharp icon " />
            </li>
          </ul> */}
        </section>
        <section id="projects" className="projects">
          <h1>{spanish ? "Proyectos" : "Projects"}</h1>
          <div className="projects-wrapper">
            <div className="projects-card">
              <h2>GOLF Landing Page</h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project4} alt="GOLF Landing Page" />
                </div>
                <p>
                  {spanish
                    ? "Landing page para la marca GOLF. Dise??o y maquetado realizado en Figma, Desarrollada en React."
                    : "Qatar Worldcup real-time stats webpage. Data is extracted from an API. Frontend developed in React and Backend in NodeJS with ExpressJS."}
                </p>
              </div>
              <a href="https://golfwang.netlify.app" target="_blank">
                {spanish ? "Ver pagina" : "View page"}
              </a>
              <a href="https://github.com/thiaguetas/golflandingpage">
                {spanish ? "Ver repositorio" : "View repository"}
              </a>
            </div>
            <div className="projects-card">
              <h2>
                {spanish
                  ? "Tienda de ropa Colibri (Ecommerce)"
                  : "Colibri Web Store (Ecommerce)"}
              </h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project3} alt="colibri web store" />
                </div>
                <p>
                  {spanish
                    ? "Ecommerce para una tienda de venta de ropa sublimada. Desarrollado en Javascript, con React y Redux para el frontend, Node js, Express Sequelize y Postgres para el backend."
                    : "Sublimated clothes store Ecommerce. Developed in Javascript, with React and Redux for the frontend, and Node, Express, Sequelize and Postgres for the backend."}
                </p>
              </div>
              <a
                href="https://github.com/AgustinSaraspe/ecommerceDeRopa"
                target="_blank"
              >
                {spanish ? "Ver m??s" : "View More"}
              </a>
            </div>
            <div className="projects-card">
              <h2>WorldCup Qatar 2022 Stats Webpage</h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project2} alt="world cup page project" />
                </div>
                <p>
                  {spanish
                    ? "Pagina web de datos en tiempo real del mundial Qatar 2022. Los datos son extraidos de una API externa, Front End desarrollado con React y Backend con Node.js y Express.js."
                    : "Qatar Worldcup real-time stats webpage. Data is extracted from an API. Frontend developed in React and Backend in NodeJS with ExpressJS."}
                </p>
              </div>
              <a href="https://github.com/thiaguetas/qatar-wc" target="_blank">
                {spanish ? "Ver m??s" : "View More"}
              </a>
            </div>
            <div className="projects-card">
              <h2>{spanish ? "Punto de Venta" : "Sell Point"}</h2>
              <div className="project-info">
                <div className="project-slider">
                  <img src={project1} alt="sell point developed in C#" />
                </div>
                <p>
                  {spanish
                    ? "Aplicacion de escritorio para negocios con control de stock, control de usuarios y administradores. Desarrollada en C# con base de datos en SQL Server."
                    : "Desktop aplication designed for stores, with stock control, user and admin control. Developed in C# and using SQL Server as Database."}
                </p>
              </div>
              <a
                href="https://github.com/AgustinSaraspe/SISTEMA_PUNTO_DE_VENTAS"
                target="_blank"
              >
                {spanish ? "Ver m??s" : "View More"}
              </a>
            </div>
          </div>
        </section>
        <section id="education" className="education">
          <h1>{spanish ? "Educaci??n" : "Education"}</h1>
          <h2>
            {spanish
              ? "Toca las tarjetas para ver m??s informaci??n"
              : "Touch the cards to see more info"}
          </h2>
          <div className="education-wrapper">
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-school"></i>
                  <h3>
                    {!spanish
                      ? "Personal and Professional Computer Technician"
                      : "T??cnico en Computaci??n Profesional y Personal"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-school"></i>
                  <h3>
                    {spanish
                      ? 'Escuela T??cnica "Hilda Guerrero de Molina"'
                      : '"Hilda Guerrero de Molina" Technical School'}
                  </h3>
                  <h4>2011 - 2018</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-building-columns"></i>
                  <h3>
                    {spanish
                      ? "Programador Universitario"
                      : "College Programmer"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-building-columns"></i>
                  <h3>Universidad Tecnol??gica Nacional</h3>
                  <h4>2021 - 2023</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-code"></i>
                  {/* <h3>Fullstack Developer</h3> */}
                  <h3>
                    {spanish
                      ? "Desarrollador Fullstack"
                      : "Fullstack Developer"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-code"></i>
                  <h3>Bootcamp NUCBA</h3>
                  <h4>2021 - 2022</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-building-columns"></i>
                  {/* <h3>Ing. en Sistemas de la Informaci??n</h3> */}
                  <h3>
                    {spanish
                      ? "Ing. en Sistemas de la Informaci??n"
                      : "Information System Engineering"}
                  </h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-building-columns"></i>
                  <h3>Universidad Tecnol??gica Nacional</h3>
                  <h4>2019 - 2020</h4>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="inner-box">
                <div className="front-box">
                  <i className="fa-solid fa-language"></i>
                  <h3>{spanish ? "Ingl??s B2" : "B2 English"}</h3>
                </div>
                <div className="back-box">
                  <i className="fa-solid fa-language"></i>
                  <h3>{spanish ? "Instituto Rush" : "Rush Institute"}</h3>
                  <h4>2020</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <h1>{spanish ? "Acerca de mi" : "About me"}</h1>
          <div>
            <p>
              {spanish
                ? "Me encanta aprender nuevas cosas, y cuando se trata de tecnolog??a me gusta explorarlo por mi cuenta."
                : "I love to learn new things, and when it comes to IT i like to search and explore the things by myself."}
            </p>
            <p>
              {spanish
                ? "Me cosidero una persona autodidacta, dedicada, apasionada y constante."
                : "I consider myself as a self taught, dedicated, passionated and constant person."}
            </p>
            <p>
              {spanish
                ? "Mi meta actualmente es conseguir mi primer empleo IT, para as?? poder conocer colegas de los cuales aprender?? y asi podr?? desarrollarme mucho m??s."
                : "My current goal is to get my first professional IT job, in order to met really interesting partners whose i'll be able to learn and develop myself much more than i do now."}
            </p>
            {/* <p>In my free time i love to play and listen to music. I play the guitar, piano and also sing. I like to read books and workout, once a week i'm a volleyball player.</p> */}
          </div>
        </section>
        <section id="contact" className="contact">
          <h1>{spanish ? "Contactame!" : "Get in touch!"}</h1>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <h4>+54 3863693540</h4>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <h4>thiagososaarganaraz@gmail.com</h4>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thiago-sosa-arga%C3%B1araz-b26034214/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
                <h4>Thiago Sosa Arga??araz</h4>
              </a>
            </li>
          </ul>
          <h2>{spanish ? "Descargar CV" : "Download Resume"}</h2>
          <a
            className="resumeDownload"
            href={spanish ? spanishCv : englishCv}
            download={spanish ? "CV-Thiago" : "Resume-Thiago"}
          >
            {spanish ? "AQU??!" : "HERE!"}
          </a>
        </section>
      </div>
      <footer>
        <h5>Thiago Sosa Arga??araz ??</h5>
        <div className="footer-logo">
          <img src={logoWhite} />
        </div>
      </footer>
    </div>
  );
}

export default App;
