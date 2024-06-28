import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import MainContent from "./componentes/MainContent";
import Footer from "./componentes/Footer";

import {
  HeroPrincipal,
  HeroAboutUs,
  HeroBlog,
  HeroHelp,
  HeroBooks,
  HeroInformation,
  HeroByFilter,
} from "./componentes/Hero";

import FilterBy from "./endpoints/FilterBy";
import AboutUs from "./endpoints/AboutUs";
import Blog from "./endpoints/Blog";
import Help from "./endpoints/Help";
import Article from "./endpoints/Article";
import Books from "./endpoints/Books";

const Information =lazy(() => import ("./endpoints/Information"));
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroPrincipal />
                <MainContent />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <HeroAboutUs />
                <AboutUs />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <HeroBlog />
                <Blog />
              </>
            }
          />
          <Route path="/information" element={
          <>
            <HeroInformation />
            <Suspense fallback={<div>Loading...</div>}>
              <Information />
            </Suspense>
          </>
        } />
          <Route
            path="/blog/:id"
            element={
              <>
                <HeroBlog />
                <Article />
              </>
            }
          />
          <Route
            path="/filterBy/:idTipo/:idNombre"
            element={
              <>
                <HeroByFilter/>
                <FilterBy />
              </>
            }
          />
          
          <Route
            path="/books"
            element={
              <>
                <HeroBooks />
                <Books />
              </>
            }
          />
          <Route
            path="/help"
            element={
              <>
                <HeroHelp />
                <Help />
              </>
            }
          />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
