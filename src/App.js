import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import CategoryPage from "./components/homepage/CategoryPage";
import NotFound from "./components/notfound/NotFound";
import Footer from "./components/footer/Footer";

import './App.css';

const App = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = {
    "B&W": importAll(require.context('./img/bw', false, /\.(png|jpe?g|svg)$/)),
    "C-41": importAll(require.context('./img/c41', false, /\.(png|jpe?g|svg)$/)),
    "E-CN2": importAll(require.context('./img/ecn2', false, /\.(png|jpe?g|svg)$/)),
  }

  const categories = Object.keys(images);

  return (
    <div className="App">
      <div className="page-container">
        <Routes className="content-wrapper">
          <Route path="/" element={<HomePage images={images} categories={categories} />} />
          <Route path="category/:category" element={<CategoryPage images={images} categories={categories} />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </div>
      <Footer categories={categories} />
    </div>
    
  );
};

export default App;
