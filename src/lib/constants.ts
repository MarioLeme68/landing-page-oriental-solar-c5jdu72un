export const WHATSAPP_NUMBER = '5521971664200'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, vi o site da Oriental Solar e gostaria de saber mais sobre como ter conforto e economia com energia solar.'

export const getWhatsAppLink = (text: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
