/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   ============================================================ */

window.HALL_DATA = {

  // ---- Identity ----
  name: "Parveen Mahal",
  nameUrdu: "پروین محل",
  tagline: "Samanabad's Home For Grand Celebrations",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 3.8,
  reviewCount: 448,

  // ---- Contact ----
  phoneDisplay: "+92 322 4141875",
  phoneLink: "+923224141875",
  whatsappNumber: "923224141875",

  // ---- Location ----
  addressLine: "780/N, Samanabad Town, Lahore, 54000",
  locatedIn: "",
  hoursLine: "Open today · Closes 11 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parveen+Mahal+Samanabad+Town+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "Parveen Mahal has been a familiar name in Samanabad for years, hosting weddings and walimas for families across the neighbourhood. A spacious hall, central location and a team that knows how to run a big night — Parveen Mahal keeps celebrations close to home.",

  // ---- Gallery images ----
  gallery: [
    "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533895328492-8bb1eab48f24?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1000&auto=format&fit=crop"
  ],

  // ---- Trust strip shown right under the hero ----
  heroStats: [
    { value: "3.8★", label: "Average rating" },
    { value: "448+", label: "Celebrations hosted" },
    { value: "500", label: "Guest capacity" }
  ],

  // ---- Amenities ----
  amenities: [
    { icon: "guests",    label: "Up to 500 Guests" },
    { icon: "parking",   label: "Street & Lot Parking" },
    { icon: "power",     label: "Backup Generator" },
    { icon: "catering",  label: "In-house Catering" },
    { icon: "sound",     label: "Sound & Stage Setup" },
    { icon: "ac",        label: "Fully Air-Conditioned" }
  ],

  // ---- Packages / pricing tiers ----
  packages: [
    {
      tier: "Silver",
      price: "Rs 1,500 / head",
      note: "Starting from",
      features: ["Standard hall décor", "3-course menu", "Basic sound system", "Seating for up to 250"]
    },
    {
      tier: "Gold",
      price: "Rs 2,300 / head",
      note: "Most booked",
      features: ["Premium stage & floral décor", "5-course menu + live counters", "Full sound & lighting", "Seating for up to 380"],
      featured: true
    },
    {
      tier: "Platinum",
      price: "Rs 3,400 / head",
      note: "Full luxury",
      features: ["Signature bridal stage design", "Unlimited live counters", "Dedicated event coordinator", "Seating for up to 500"]
    }
  ],

  // ---- Testimonials ----
  testimonials: [
    { name: "Imran Q.", rating: 4, text: "Central location made it easy for all our guests. Good size hall for a mid-to-large wedding." },
    { name: "Rabia S.", rating: 4, text: "Booked for our walima, food and seating arrangement were handled well on the day." },
    { name: "Adeel N.", rating: 3, text: "Decent hall for the price. Would recommend confirming all details with staff ahead of time." }
  ],

  // ---- All on-page wording lives here. Change any of these per client without touching index.html.
  copy: {
    nav: { about: "About", gallery: "Gallery", packages: "Packages", reviews: "Reviews", visit: "Visit" },
    hero: {
      ctaPrimary: "Enquire on WhatsApp",
      ctaSecondary: "View Gallery",
      whatsappMessageTemplate: "Hi, I'd like to enquire about booking {name}."
    },
    about: { eyebrow: "OUR STORY", title: "A legacy of grand celebrations" },
    amenities: { eyebrow: "FACILITIES", title: "Everything the evening needs" },
    gallery: { eyebrow: "GALLERY", title: "A hall built for the biggest nights" },
    packages: { eyebrow: "PACKAGES", title: "Choose your evening" },
    reviews: { eyebrow: "GUEST REVIEWS", titleTemplate: "Loved by {count}+ families" },
    visit: {
      eyebrow: "VISIT US",
      title: "Plan your visit",
      addressLabel: "ADDRESS",
      hoursLabel: "HOURS",
      phoneLabel: "PHONE",
      directionsCta: "Get Directions"
    },
    enquiry: {
      eyebrow: "ENQUIRE",
      title: "Check your date",
      subtext: "Tell us about your event and we'll reply on WhatsApp within the day.",
      namePlaceholder: "Your name",
      datePlaceholder: "Event date",
      guestsPlaceholder: "Guest count",
      phonePlaceholder: "Phone number",
      msgPlaceholder: "Tell us about your event (mehndi, walima, corporate...)",
      submitCta: "Send Enquiry on WhatsApp"
    },
    footer: {
      disclaimerLine1: "Prototype built for presentation purposes only — not a live production website.",
      disclaimerLine2: "The full version includes your own domain, a content-editable admin, booking calendar and WhatsApp lead automation."
    }
  }

};
