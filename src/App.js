import logo from './logo.svg';
import Header from "./components/header/header";
import Skills from "./components/skill/skill";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import './App.css';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
