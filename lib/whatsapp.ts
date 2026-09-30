import { site } from "./site";

export function getWhatsAppLink(message?: string) {
  const defaultMsg = message ?? site.whatsapp.defaultMessage;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    defaultMsg
  )}`;
}
