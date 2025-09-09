import Hero from "./componentes/hero/Hero"
import Portifolio from "./componentes/portifolio/Portifolio"
import Services from "./componentes/services/Services"
import Contact from "./componentes/contact/Contact"
const App = () => {
  return (
    <div className=''>
      <Hero/>
      <Services/>
      <Portifolio/>
      <Contact/>
    </div>
  )
}

export default App