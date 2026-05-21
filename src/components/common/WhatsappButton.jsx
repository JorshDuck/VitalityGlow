import { SiWhatsapp } from 'react-icons/si'
import { URLS, MESSAGES } from '../../data/config'
import '../../assets/Styles/WhatsAppButton.css'

function WhatsAppButton() {
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

export default WhatsAppButton