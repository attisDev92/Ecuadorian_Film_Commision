import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import esp from './i18n/esp.json'
import eng from './i18n/eng.json'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Index from './layouts/Index'
import LocationsGuide from './layouts/LocationGuide'
import NotFound from './layouts/NotFound'

import "./App.css"

function App() {

  const [keyLanguajeSelected, setKeyLanguajeSelected] = useState('español')

  const handleChangeLanguaje = (languaje) => {
    if(languaje === 'español') {
      setKeyLanguajeSelected('español')
    } else if(languaje === 'english') {
      setKeyLanguajeSelected('english')
    }
  }

  const text  = keyLanguajeSelected === 'español' ? esp : eng
  
  return (
    <Router>
      <Header handleChangeLanguaje={handleChangeLanguaje} text={text} />

      <Routes>
        <Route path='/' element={<Index text={text} />} />
        <Route path='/locations' element={<LocationsGuide text={text}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer text={text} />      
    </Router>
  )
}

export default App
