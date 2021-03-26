import "../sass/main.scss";
import React from "react";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import SectionExplore from "./SectionExplore";
import SectionCard from "./SectionCard";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionAbout />
        <SectionExplore />
        <SectionCard />
      </main>
    </div>
  );
};

export default App;
