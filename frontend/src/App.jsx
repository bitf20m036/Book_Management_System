import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Create from "./pages/Create";
import View from "./pages/View";
import SingleView from "./pages/SingleView";
import Edit from "./pages/Edit";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="container">
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/view">View All</Link>
          </div>
        </div>
      </nav>
      
      <main className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
          <Route path="/view-single/:id" element={<SingleView />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;