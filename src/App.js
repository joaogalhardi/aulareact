import Home from './screens/Home';
import About from './screens/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
