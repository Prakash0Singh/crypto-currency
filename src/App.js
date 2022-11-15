import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import Currency from './components/Currency'
import Exchange from "./components/Exchange"
import Home from './components/Home'
import CurrDetail from './components/CurrDetail'
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/currency/:id" element={<CurrDetail />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
