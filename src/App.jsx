import Hero from './components/Hero'
import { About } from "./components/About"
import NavBar from './components/NavBar'
import Features from './components/Features'
import Story from './components/Story'
import Footer from './components/Footer'
import Contact from './components/Contact'
const App = () => {
  return (
    <main className='relative min-h-screen  w-screen overflow-x-hidden bg-zinc-600'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />

    </main>
  )
}

export default App