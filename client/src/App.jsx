import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Events from "./components/Events.jsx";
import AddEvent from "./components/AddEvent.jsx";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Events />} />
      <Route path="/addevent" element={<AddEvent />} />



    </Routes>
    </BrowserRouter>
  );
};

export default App;
