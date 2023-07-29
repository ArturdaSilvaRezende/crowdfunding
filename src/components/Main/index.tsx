import MainAboutProject from "./MainAboutProject";
import MainBackers from "./MainBackers";
import MainTitle from "./MainTitle";

const Main = () => {
  return (
    <main className="main">
      <MainTitle />
      <MainBackers />
      <MainAboutProject />
    </main>
  );
};

export default Main;
