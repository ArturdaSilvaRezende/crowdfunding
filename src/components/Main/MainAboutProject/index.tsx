import { useState } from "react";
import AboutProjectCards from "./AboutProjectCards";
import AboutProjectModal from "./AboutProjectModal";
import AboutProjectTitle from "./AboutProjectTitle";
import ModalCheckout from "./ModalCheckout";

const MainAboutProject = () => {
  const [cardState, setCardState] = useState(false);
  const [modalCheckout, setModalCheckout] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <div className="about-project">
        <AboutProjectTitle />
        <AboutProjectCards
          setCardState={setCardState}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      {cardState && (
        <AboutProjectModal
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          setCardState={setCardState}
          setModalCheckout={setModalCheckout}
        />
      )}

      {modalCheckout && <ModalCheckout />}
    </>
  );
};

export default MainAboutProject;
