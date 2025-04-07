import { useState } from 'react'
import './App.css'
import { CustomButton } from './base-components/CustomButton'
import { CustomForm } from './composed-components/CustomForm'
import { Portfolio } from './pages/Portfolio'
import { NavBar } from './composed-components/NavBar'
import { FormSub } from './pages/FormSub'
import { AboutMe } from './pages/AboutMe'

function App() {
  return (
    <div>
      <header className="sticky top-0 bg-transparent backdrop-blur-lg mb-5">
        <NavBar/>
      </header>
      <main>
        {/* <Portfolio /> */}
        {/* <FormSub/> */}
        <AboutMe/>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
