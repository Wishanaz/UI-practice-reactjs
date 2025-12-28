import Detail from "./components/Detail.jsx"
import Footer from "./components/Footer.jsx";
import Hero from "./components/hero"
import Moreinfo from "./components/Moreinfo.jsx"
import Navbar from "./components/Navbar.jsx"
import Numbering from "./components/Numbering.jsx"
import OurServices from "./components/OurServices.jsx"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Detail/>
      <Moreinfo/>
      <Numbering/>
      <OurServices/>
      <Footer/>
    </div>
  )
}

export default App