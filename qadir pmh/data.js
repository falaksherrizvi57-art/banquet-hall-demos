/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   ============================================================ */

window.HALL_DATA = {

  // ---- Identity ----
  name: "Qadir Palace Banquet Hall",
  nameUrdu: "قادر پیلس بینکوئٹ ہال",
  tagline: "Kot Lakhpat's Home For Grand Celebrations",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 4.4,
  reviewCount: 115,

  // ---- Contact ----
  phoneDisplay: "+92 300 8108050",
  phoneLink: "+923008108050",
  whatsappNumber: "923008108050",

  // ---- Location ----
  addressLine: "Maulana Shaukat Ali Rd, Kot Lakhpat, Lahore, 54000",
  locatedIn: "",
  hoursLine: "Open · Closes 10 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Qadir+Palace+Banquet+Hall+Kot+Lakhpat+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "Qadir Palace Banquet Hall has become a trusted name in Kot Lakhpat, hosting weddings, walimas and mehndis for families from across Lahore. With a grand hall, easy access off Maulana Shaukat Ali Road and a team experienced in running big nights, Qadir Palace brings together space, service and style for every celebration.",

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
    { value: "4.4★", label: "Average rating" },
    { value: "115+", label: "Celebrations hosted" },
    { value: "500", label: "Guest capacity" }
  ],

  // ---- Amenities ----
  amenities: [
    { icon: "guests",    label: "Up to 500 Guests" },
    { icon: "parking",   label: "On-site Parking" },
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
    { name: "Imran Q.", rating: 5, text: "Great hall for a big wedding, easy to find off the main road and plenty of parking." },
    { name: "Rabia S.", rating: 4, text: "Booked for our walima, staff were helpful and the hall looked beautiful on the day." },
    { name: "Adeel N.", rating: 4, text: "Good size venue for the price, would recommend confirming all details with staff ahead of time." }
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
