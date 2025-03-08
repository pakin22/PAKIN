import "./index.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Summary />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
