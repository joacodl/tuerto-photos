import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import CategoryPage from "./components/homepage/CategoryPage";
import NotFound from "./components/notfound/NotFound";
import Footer from "./components/footer/Footer";

import './App.css';

const imageInfo = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c52750e8f513001c63a48f1/1564377375172-2M9N5PE8G6DN5RCOQ18O/ADVENTURE+Lola+Photography_045.jpg?format=1000w",
    title: "title",
    year: "year",
    category: "C-41",
    cover: true
  },
  {
    id: 2,
    image:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    title: "title",
    year: "year",
    category: "B&W",
    cover: true
  },
  {
    id: 3,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c52750e8f513001c63a48f1/1564377375172-2M9N5PE8G6DN5RCOQ18O/ADVENTURE+Lola+Photography_045.jpg?format=1000w",
    title: "title",
    year: "year",
    category: "C-41",
    cover: false
  },
  {
    id: 4,
    image:
      "https://photo-works.net/images/europe-landscape-photo-unedited.jpg",
    title: "title",
    year: "year",
    category: "E-CN2",
    cover: true
  },
  {
    id: 5,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c52750e8f513001c63a48f1/1564377375172-2M9N5PE8G6DN5RCOQ18O/ADVENTURE+Lola+Photography_045.jpg?format=1000w",
    title: "title",
    year: "year",
    category: "E-CN2",
    cover: false
  },
  {
    id: 6,
    image:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    title: "title",
    year: "year",
    category: "C-41",
    cover: false
  },
];

const initialImageInfo = {
  enteredUrl: "",
  enteredTitle: "",
  enteredYear: "",
  enteredCategory: "",
}

const App = () => {

  const [image, setImage] = useState(initialImageInfo)

  const categories = []

  imageInfo.forEach(info => {
      info.cover === true && categories.push(info.category)
  })

  const formHandler = (event) => {
    setImage({...image, [event.target.name]: event.target.value})
}

  const submitHandler = (event) => {
    event.preventDefault();

    const imageData = {
      url: image.enteredUrl,
      title: image.enteredTitle,
      year: image.enteredYear,
      category: image.enteredCategory
    }

    console.log(imageData);

    setImage(initialImageInfo);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="file" name="enteredUrl" value={image.enteredUrl} onChange={formHandler} />
        <input type="text" placeholder="title" name="enteredTitle" value={image.enteredTitle} onChange={formHandler} />
        <input type="text" placeholder="year" name="enteredYear" value={image.enteredYear} onChange={formHandler} />
        <select name="enteredCategory" defaultValue={image.enteredCategory} onChange={formHandler}>
          <option value={image.enteredCategory} disabled>Choose a Category</option>
          <option value="C-41">C-41</option>
          <option value="B&W">B&W</option>
          <option value="E-CN2">E-CN2</option>
        </select>
        <button type="submit">Subir Foto</button>
      </form>
      {/* <div className="page-container">
        <Routes className="content-wrapper">
          <Route path="/" element={<HomePage imageInfo={imageInfo} categories={categories} />} />
          <Route path="category/:category" element={<CategoryPage images={imageInfo} categories={categories} />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </div>
      <Footer categories={categories} /> */}
    </div>
    
  );
};

export default App;
