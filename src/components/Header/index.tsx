import { useRef, useEffect } from "react";
import HeaderContents from "./HeaderContents";

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const handleScrollTop = () => {
    if (headerRef.current) {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      } else {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
      }

      if (window.innerWidth > 767) {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => window.removeEventListener("scroll", handleScrollTop);
  });

  return (
    <header className="header" ref={headerRef}>
      <HeaderContents />
    </header>
  );
};

export default Header;
