import PropTypes from 'prop-types'
import style from './VideoBanner.module.css'
import imgBanner from '../../assets/images/Still Reel CF.png'

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

VideoBanner.propTypes = {
    urlVideoMp4: PropTypes.string.isRequired,
    urlVideoOgg: PropTypes.string
}

export default VideoBanner