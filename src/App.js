import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Featured from "./components/Featured";
import Category from "./components/Category";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Featured />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
