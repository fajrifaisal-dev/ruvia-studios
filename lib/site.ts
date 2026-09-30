export const site = {
  name: "Ruvia Studios",
  tagline: "Digital solutions for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ruviastudios.com", // update later
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@ruviastudios.com",
  whatsapp: {
    number: "6289639873022",
    display: "+62 896-3987-3022",
    defaultMessage:
      "Hi Ruvia Studios, I'd like to discuss a project. Here is a short brief:",
  },
  showStreetAddress: true,
  locations: [
    {
      city: "Pontianak",
      region: "West Kalimantan",
      country: "ID",
      street: "Jl. Merdeka Barat No. 30, Pontianak Kota",
    },
    {
      city: "Surabaya",
      region: "East Java",
      country: "ID",
      street: "Jl. Medokan Semampir Indah No. 36",
    },
  ],
  serviceArea: "Indonesia",
} as const;
