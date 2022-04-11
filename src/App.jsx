
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portafolio from './components/portafolio/Portafolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Servicios from './components/servicios/Servicios'


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Servicios />
      <Portafolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;