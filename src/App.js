import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
import Error from "./Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="singlemovie/:id" element={<Movie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
