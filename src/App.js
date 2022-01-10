import About from 'components/About';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Products from 'components/Products';
import Questions from 'components/Questions';
import Step from 'components/Step';
import { useEffect } from 'react';

function App() {
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollUp);
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Step />
        <Products />
        <Questions />
        <Contact />
      </main>
      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-fill scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
