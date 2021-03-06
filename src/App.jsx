import { Benefits } from "./components/Benefits/Benefits"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Network } from "./components/Network/Network"
import { Payment } from "./components/Payment/Payment"
import { Roadmap } from "./components/Roadmap/Roadmap"
import { Wallets } from "./components/Wallets/Wallets"
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <Benefits />
      <Payment />
      <Roadmap />
      <Network />
      <Wallets />
    </div>
  )
}

export default App
