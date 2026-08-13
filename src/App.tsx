import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
