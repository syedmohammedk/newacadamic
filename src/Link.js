import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./course";
function Link() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/header" element={<Header/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Link