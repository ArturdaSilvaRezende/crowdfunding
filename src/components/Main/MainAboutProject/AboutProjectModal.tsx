import { useState } from "react";
import MainAboutProjectList from "./MainAboutProjectList";
import IconCloseModal from "../../../assets/images/main/icon-close-modal.svg";

interface MainAboutModal {
  activeCard: number;
  setActiveCard: (props: number) => void;
  setCardState: (props: boolean) => void;
  setModalCheckout: (props: boolean) => void;
}

const AboutProjectModal = (props: MainAboutModal) => {
  const [cards] = useState(MainAboutProjectList);

  const handleCardModal = (index: number) => {
    props.setActiveCard(index);
  };

  const closeModal = () => {
    props.setCardState(false);
  };

  const openCheckout = (index: number) => {
    props.setActiveCard(index);
    props.setModalCheckout(true);
  };

  return (
    <div className="about-project-modal fadeIn">
      <div className="about-project-modal__container">
        <div className="about-project-modal__title">
          <h1>Back this project</h1>
          <button onClick={() => closeModal()}>
            <img src={IconCloseModal} alt="Icon Close Modal" />
          </button>
        </div>
        <p className="about-project-modal__description">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="about-project-modal__cards">
          <div className="about-project-modal__cards-item">
            <div className="cards-item__title">
              <button>
                <span>.</span>
                <span>.</span>
              </button>
              <h2>Pledge with no reward</h2>
            </div>
            <p className="cards-item__description">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          {cards.map((item, index) => (
            <div
              className={`about-project-modal__cards-item  ${
                index === props.activeCard ? "active-border" : ""
              }`}
              key={item.id}
              onClick={() => handleCardModal(index)}
            >
              <div className="cards-item__title">
                <button className="cards-item__check">
                  <span></span>
                  <span
                    className={`${
                      index === props.activeCard ? "active-check" : ""
                    }`}
                  ></span>
                </button>
                <div>
                  <h2>{item.title}</h2>
                  <h3> Pledge ${item.subtitleCount} or more</h3>
                </div>
              </div>
              <p className="cards-item__description">{item.description}</p>
              <p className="cards-item__left">
                <span>{item.leftCount}</span>
                <span>left</span>
              </p>
              {index === props.activeCard && (
                <div className="cards-item__continue fadeIn">
                  <p>Enter your pledge</p>
                  <div>
                    <button>
                      <span>$</span>
                      <span> {item.subtitleCount}</span>
                    </button>
                    <button onClick={() => openCheckout(index)}>
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProjectModal;
