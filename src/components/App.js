import "../sass/main.scss";
import React from "react";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import SectionExplore from "./SectionExplore";
import SectionCard from "./SectionCard";
import SectionStory from "./SectionStory";
import SectionForm from "./SectionForm";
import SectionFooter from "./SectionFooter";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionAbout />
        <SectionExplore />
        <SectionCard />
        <SectionStory />
        <SectionForm />
        <SectionFooter />
      </main>
    </div>
  );
};

export default App;
