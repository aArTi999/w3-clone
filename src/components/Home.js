import React, { useState } from "react";
import Advertisements from "./Advertisements";
import MainContent from "./MainContent";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import SideContentBar from "./SideContentBar";

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => setIsDark(!isDark);
  return (
    <section
      className={`w-full h-screen overflow-y-hidden ${isDark && "dark"} `}
    >
      <Navbar1 />
      <Navbar2 toggleDarkMode={toggleDarkMode} />
      <div>
        <div className="flex">
          <SideContentBar />
          <MainContent />
          <Advertisements />
        </div>
      </div>
    </section>
  );
};
export default Home;
