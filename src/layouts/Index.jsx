import { useState } from 'react'

import VideoBanner from '../components/VideoBanner/VideoBanner'
import Locations from '../components/Locations/Locations'
import DocumentList from '../components/DocumentList'
import SuppliersCard from '../components/SuppliersCard/SuppliersCard'
import Section from '../components/Section/Section'

function Index({ text }) {

  
  return (
    <>
     
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

    </>
  )
}

export default Index
