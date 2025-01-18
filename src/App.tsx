import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Story from "./sections/Story";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <NavBar />
    <Hero />
    <About />
    <Features />
    <Story />
    <Contact />
    <Footer />
  </main>
  );
};

export default App;
