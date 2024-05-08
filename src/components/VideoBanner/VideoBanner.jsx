import style from './VideoBanner.module.css'

const VideoBanner = ({ text  }) => {

    return (
        <div className={style.container__video}>
            <video className={style.video}  autoPlay loop preload='auto' >
                <source src={`/assets/videos/${text.videoBanner.urlVideoMp4}`} type="video/mp4"/>
                {/* <source src={text.VideoBanner.urlVideoOgg} type="video/ogg"/> */}
                Tu navegador no soporta la etiqueta de 'video'.
            </video>
        </div>
    )
}


export default VideoBanner