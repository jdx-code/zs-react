import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const initFontAwesome = () => {
    library.add(fab, faFacebook, faTwitter, faInstagram, faLinkedin)
}

export default initFontAwesome;

