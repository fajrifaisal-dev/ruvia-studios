export const site = {
  name: "Ruvia Studios",
  tagline: "Digital solutions for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ruviastudios.site",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "helloruviastudio.site@gmail.com",
  whatsapp: {
    number: "6289639873022",
    display: "0896-3987-3022",
    defaultMessage:
      "Halo Ruvia Studio, saya tertarik untuk konsultasi layanan pembuatan website & sistem.",
    consultant: {
      name: "Faisal Fajri",
      role: "Founder • Ruvia Studio",
      avatar: "",
      status: "Online • balas cepat",
    },
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
      street: "Jl. Dr. Ir. H. Soekarno Jl. Medokan Semampir Indah No.63, Medokan Semampir, Kec. Sukolilo, Surabaya, Jawa Timur 60119, Indonesia",
    },
  ],
  serviceArea: "Indonesia",
} as const;
