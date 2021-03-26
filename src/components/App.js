import "../sass/main.scss";
import React from "react";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import SectionExplore from "./SectionExplore";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionAbout />
        <SectionExplore />
      </main>
    </div>
  );
};

export default App;
