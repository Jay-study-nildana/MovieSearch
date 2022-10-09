import './App.css';
//we need all these components to make routing happen
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginComponent from './components/LoginComponent';
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <LoginComponent/>
    </div>
  );
}

export default App;
