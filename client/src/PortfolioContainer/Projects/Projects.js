import React from "react";
import ProjectItem from "./ProjectItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import Dashboard from "../img/Projects/Dashboard.png";
import EWallet from "../img/Projects/EWallet.png";
import IngeBra from "../img/Projects/IngeBra.png";
import StarWars from "../img/Projects/StarWars.png";
import Sinus from "../img/Projects/Sinus.png";
import BattlePass from "../img/Projects/BattlePass.png";
import shape from "../img/Projects/shape-bg.png";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Here you can see my projects"}
      />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={EWallet} alt=""></img>
                    <h5>E-wallet</h5>
                </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={IngeBra} alt=""></img>
                    <h5>Inge Bra Bygg</h5>
                  </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={Dashboard} alt=""></img>
                    <h5>Dashboard</h5>
                  </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={StarWars} alt=""></img>
                    <h5>Star Wars</h5>
                  </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={Sinus} alt=""></img>
                    <h5>Sinus</h5>
                  </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={BattlePass} alt=""></img>
                    <h5>BattlePass</h5>
                  </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="" />
      </div>
      <div>
          <ProjectItem
              imageSrc={EWallet}
              title="E-wallet"
              description="The E-wallet App is a single page application, built in Vue.js and has different views."
              githubLink="https://github.com/KseniiaLk/e-wallet"
            />
            <ProjectItem
              imageSrc={IngeBra}
              title="Inge Bra Bygg"
              description="Backend REST API for a case management system for a building company written in Node.js, Express."
              githubLink="https://github.com/KseniiaLk/Inge_Bra_Bygg"
            />
            <ProjectItem
              imageSrc={Dashboard}
              title="Dashboard"
              description="ITHS Dashboard is a Progressive Web App (PWA) built in React, TypeScript."
              githubLink="https://github.com/KseniiaLk/cpu-dashbord"
            />
            <ProjectItem
              imageSrc={StarWars}
              title="Star Wars"
              description="A single page application that lists all the characters and their personal details from the Star Wars movies. Created using the Star Wars API, written in HTML, CSS, and Native JavaScript."
              githubLink="https://github.com/KseniiaLk/Slutprojekt-Javascript"
            />
            <ProjectItem
              imageSrc={Sinus}
              title="Sinus"
              description="SINUS Webshop is an online store that sells skateboards and accessories (Figma design)."
              githubLink="https://www.figma.com/file/JwcsZtG4RAPKFNFOF9s12V/slut-projekt?node-id=2%3A2&mode=dev"
            />
            <ProjectItem
              imageSrc={BattlePass}
              title="BattlePass"
              description="The BattlePass page, produced for Stryda. Created using React, TypeScript, and Tailwind CSS."
              githubLink="https://play.stryda.gg/home"
            />
      </div>
    </div>

  );
}