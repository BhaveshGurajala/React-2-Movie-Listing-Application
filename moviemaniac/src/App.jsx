import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <MovieList />
    </div>
  );
};

export default App;
