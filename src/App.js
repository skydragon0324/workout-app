import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, Navbar, ExerciseDetails, Footer } from "./components/index";
import './App.css'
const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};
export default App;
