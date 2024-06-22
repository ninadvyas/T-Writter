import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./components/home";
import About from "./components/about";

const TypewriterApp = () => {
  return (
    <BrowserRouter>
      <main className="typewriter-app-container p-12 max-md:pt-28">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default TypewriterApp;