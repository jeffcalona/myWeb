import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Components/Theme'
import ScrollBar from './Components/ScrollBar'
import Skills from './Components/Skills'

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={Theme} >
        <Navbar />
        <ScrollBar />
        <About />
        <Skills />
      </ThemeProvider>
    </div>
  )
}

export default App
