import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WelcomeSection />
    </div>
  )
}

export default App
