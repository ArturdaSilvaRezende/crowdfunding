import ImageHeroMobile from "../../assets/images/main/image-hero-mobile.jpg";
import ImageHeroDesktop from "../../assets/images/main/image-hero-desktop.jpg";

const Hero = () => {
  return (
    <figure className="hero">
      <img
        className="hero__mobile"
        src={ImageHeroMobile}
        alt="image-hero-mobile"
      />
      <img
        className="hero__desktop"
        src={ImageHeroDesktop}
        alt="image-hero-desktop"
      />
    </figure>
  );
};

export default Hero;
