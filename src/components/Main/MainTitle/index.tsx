import { useState } from "react";
import LogoMastercraft from "../../../assets/images/main/logo-mastercraft.svg";
import IconBookmarkCyan from "../../../assets/images/main/icon-bookmark-cyan.svg";
import IconBookmarkGray from "../../../assets/images/main/icon-bookmark-gray.svg";

const MainTitle = () => {
  const [isImageBtn, setIsImageBtn] = useState(false);

  const handleImage = () => {
    setIsImageBtn(!isImageBtn);
  };
  return (
    <div className="main-title">
      <figure className="main-title__images">
        <img src={LogoMastercraft} alt="Logo-Mastercraft" />
      </figure>
      <div className="main-title__description">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="main-title__buttons">
        <button className="btn__project">Back this project</button>
        <button
          className="btn__bookmark"
          onMouseEnter={handleImage}
          onMouseLeave={handleImage}
        >
          <img
            src={isImageBtn ? IconBookmarkGray : IconBookmarkCyan}
            alt="Icon-Bookmark"
          />
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default MainTitle;
