export const CONFIG = {
  whatsapp: '59174946021',
  address: 'Calle Huancha #0751'
}

// Messages
export const MESSAGES = {
  reservation: 'Hola, quiero reservar una sesión.',
  consult: 'Hola, quiero información sobre sus servicios.'
}

// URLs
export const URLS = {
  whatsapp: (message) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`,
  maps: 'https://maps.app.goo.gl/YVjTmV5L9KQ3pjpF6'
}