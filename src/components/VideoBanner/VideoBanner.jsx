import style from './VideoBanner.module.css'

const VideoBanner = ({ text  }) => {

    return (
        <div className={style.container__video}>
            <video className={style.video} autoPlay loop controls muted >
                <source src={`/assets/videos/${text.videoBanner.urlVideo}.webm`} type="video/webm"/>
                <source src={`/assets/videos/${text.videoBanner.urlVideo}.mp4`} type="video/mp4"/>
                Tu navegador no soporta la etiqueta de 'video'.
            </video>
        </div>
    )
}


export default VideoBanner