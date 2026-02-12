import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"

function App() {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
