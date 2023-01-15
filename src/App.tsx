import type { Component } from 'solid-js';
import { lazy } from "solid-js";
import { Router, Routes, Route } from '@solidjs/router';
const Home = lazy(() => import("./pages/Home"));
const Calendar = lazy(() => import("./pages/Calendar"));


const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' component={Home} />
        <Route path="/calendar" component={Calendar} />
      </Routes>
    </Router>
  );

};

export default App;

