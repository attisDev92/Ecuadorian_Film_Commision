import SliderImages from '../SliderImages/SliderImages'
import style from './Locations.module.css'

const Locations = ({ text }) => {
  
  return (
    <>
      <div className={style.locations}>
        <p>
          {text.locacionSeccion.parrafo.uno}
        </p>
        <p>
          {text.locacionSeccion.parrafo.dos}
        </p>
        <p>
          {text.locacionSeccion.parrafo.tres}
        </p>
      </div>
      
      <SliderImages text={text} />
    </>
  )
}

export default Locations