import navbar from "./components/navbar"
import hero from "./components/hero"
import about from "./components/about"

function App() {

  return (
    <>
      <nav>
        {navbar()}
      </nav>
      <main>
        {hero()}
        {about()}
      </main>
    </>
  )
}

export default App
