import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Navbar,
  Footer,
  Project,
  About,
  Contact,
  Loader,
} from "../src/components/index";

import "./i18n";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
