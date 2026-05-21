import { SiWhatsapp } from 'react-icons/si'
import { URLS, MESSAGES } from '../../Data/Config'
import '../../Assets/Styles/WhatsAppButton.css'

function WhatsappButton() {
  return (
    <a
      className='whatsapp-btn'
      href={URLS.whatsapp(MESSAGES.reservation)}
      target='_blank'
      rel='noopener noreferrer'
    >
        <SiWhatsapp />
    </a>
  )
}

export default WhatsappButton