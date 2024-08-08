import { useState } from "react";
import "./App.css";
import Product from "../Product/Product";
import Header from "../Header/Header";

const prod1 = {
  name: "Tacos With Lime",
  imgUrl:
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  // price: {10.99},
};

const prod2 = {
  name: "Fries and Burger",
  imgUrl:
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
  // price: {14.29},
};

const prod3 = {
  name: "Error",
  imgUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg",
  // price:{0},
};

export default function App() {
  return (
    <div>
      <Header />
      <h1>Best selling</h1>
      <Product prod={prod1} />
      <Product prod={prod2} />
      <Product prod={prod3} />
    </div>
  );
}
