import { useState } from "react";
import matete from "../assets/img/Ma-tete.jpg";
import github from "../assets/img/gitlab.png";
import linkedin from "../assets/img/linkedin.png";
import whatsapp from "../assets/img/whatsapp.png";
import data from "../data/data.json";
import "../assets/styles/HomeScreen.css";
import Cards from "../components/cards";
import type { item } from "../types/interface";

function HomeScreen() {
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<item | null>(null);

  const contact = data.data[4];
  return (
    <>
      <header className="navbar">
        <h2 className="name">Tom SCHRICKE</h2>
        <button
          type="button"
          onClick={() => {
            setSelectedItem(contact);
            setIsOpen(true);
          }}
          className="button-contact"
        >
          CONTACT
        </button>
      </header>
      <section className="hight-section">
        <img src={matete} alt="" className="avatar" />

        <div>
          <h1 className="title-homescreen">
            HELLO ! <br /> JE SUIS DEVELOPPEUR
          </h1>
          <p className="text-description-tom">
            Développeur web full-stack spécialisé en React, avec des compétences
            en front-end et back-end (Node.js, bases de données). Curieux et
            passionné, je m'intéresse à l'univers DevOps pour automatiser et
            optimiser les workflows de développement.
          </p>
        </div>
        <div className="age-logo">
          <div className="container-age">
            <p className="age">25</p>
          </div>
          <div className="container-logo">
            <img
              src={github}
              alt="logo-github"
              className="logo"
              onClick={() => {
                window.location.href = "https://github.com/TSMB54"; 
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.href = "https://github.com/TSMB54"; 
                }
              }}
            />
            <img
              src={linkedin}
              alt="logo-linkedin"
              className="logo"
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/tom-schricke/"; 
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.href =
                    "https://www.linkedin.com/in/tom-schricke/"; 
                }
              }}
            />
            <img
              src={whatsapp}
              alt="logo-whatsapp"
              className="logo"
              onClick={() => {
                window.location.href = "https://wa.me/33765850585"; 
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.href = "https://wa.me/33765850585"; 
                }
              }}
            />
          </div>
        </div>
      </section>
      {IsOpen && selectedItem ? (
        <Cards
          id={selectedItem.id}
          name={selectedItem.name}
          description={selectedItem.description}
          url={selectedItem.url}
          image={selectedItem.image}
          nameLink={selectedItem.nameLink}
          secondImage={selectedItem.secondImage}
          setIsOpen={setIsOpen}
        />
      ) : null}
      <main>
        <div className="container-mini-card">
          {data.data.map((item) => (
            <div
              className="mini-card"
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h2 className="title-mini-card">{item.name}</h2>
              <button
                type="button"
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(true);
                }}
                className="button-mini-card"
              >
                voir+
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>Tom SCHRICKE</p>
        <p>Ce Portfolio a été réalisé par mes soins en 20h</p>
        <p>2025</p>
      </footer>
    </>
  );
}

export default HomeScreen;
