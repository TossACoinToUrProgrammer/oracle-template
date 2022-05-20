import { Benefits } from "./components/Benefits/Benefits"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Payment } from "./components/Payment/Payment"
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <Benefits />
      <Payment />
    </div>
  )
}

export default App
