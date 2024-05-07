import style from './VideoBanner.module.css'
import imgBanner from '../../assets/Still Reel CF.png'

const VideoBanner = ({ text  }) => {

    return (
        <div className={style.container__video}>
            <img src={imgBanner} alt="" />
            {/* <video className={style.video}>
                /* <source src={text.videoBanner.urlVideoMp4} type="video/mp4"/>
                <source src={text.VideoBanner.urlVideoOgg} type="video/ogg"/>
                Tu navegador no soporta la etiqueta de 'video'.
            </video> */}
        </div>
    )
}


export default VideoBanner