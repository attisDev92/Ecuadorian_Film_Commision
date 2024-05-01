import { useState } from 'react'

import esp from './i18n/esp.json'
import eng from './i18n/eng.json'

import Header from './components/Header/Header'
import VideoBanner from './components/VideoBanner/VideoBanner'
import Locations from './components/Locations/Locations'
import DocumentList from './components/DocumentList'
import SuppliersCard from './components/SuppliersCard/SuppliersCard'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'

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
    <>
      <Header handleChangeLanguaje={handleChangeLanguaje} text={text} />

      <VideoBanner text={text} />

      <Section id={"locations"} text={text} title={text.locacionSeccion.titulo}>
        <Locations text={text} />
      </Section>

      <Section id={'documents'} title={text.documentosSeccion.titulo} text={text}>
        <ul className='list__links'>
          {
            text.documentosSeccion.lista.map(documento => { 
              return (
                <DocumentList documento={documento} key={documento.name} />
              )
            })
          }
        </ul>
      </Section>
      
      <Section id={'suppliers'} text={text} title={text.proveedoresSeccion.titulo}>
        <div className='container__suppliers'>
          {
            text.proveedoresSeccion.proveedores.map(proveedor => {
              return (
                <SuppliersCard idioma={text.idioma} proveedor={proveedor} />
              )
            })
          }
        </div>
      </Section>

      <Footer text={text} />
      
    </>
  )
}

export default App
