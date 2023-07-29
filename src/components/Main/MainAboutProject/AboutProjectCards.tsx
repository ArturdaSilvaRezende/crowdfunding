import { useState } from "react";
import MainAboutProjectList from "./MainAboutProjectList";

interface MainAboutCards {
  setCardState: (props: boolean) => void;
  activeCard: number;
  setActiveCard: (props: number) => void;
}

const AboutProjectCards = (props: MainAboutCards) => {
  const [cards] = useState(MainAboutProjectList);

  const openModal = (index: number) => {
    props.setActiveCard(index);
    props.setCardState(true);
  };

  return (
    <div className="about-project-cards">
      {cards.map((item, index) => (
        <div className="about-project-cards__item" key={item.id}>
          <div className="about-project-cards__title">
            <h2>{item.title}</h2>
            <h3> Pledge ${item.subtitleCount} or more</h3>
          </div>

          <p className="about-project-cards__description">{item.description}</p>

          <div className="about-project-cards__select">
            <p className="about-project-cards__left">
              <span>{item.leftCount}</span>
              <span>left</span>
            </p>
            <button
              className="about-project-cards__button"
              onClick={() => openModal(index)}
            >
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutProjectCards;
