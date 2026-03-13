import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Events from './components/sections/Events'
import Contact from './components/sections/Contact'
import Support from './components/sections/Support'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Events />
      <Contact />
      <Support />
    </div>
  )
}

export default App
