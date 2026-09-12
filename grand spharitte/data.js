/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   Every field is explained with a comment.
   ============================================================ */

window.HALL_DATA = {

  // ---- Identity ----
  name: "Grand Sapphire Event Complex",
  nameUrdu: "",                        // none listed on this business's Maps profile
  tagline: "Where Every Occasion Becomes An Event",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 4.3,
  reviewCount: 185,

  // ---- Contact ----
  phoneDisplay: "+92 321 0829829",
  phoneLink: "+923210829829",
  whatsappNumber: "923210829829",

  // ---- Location ----
  addressLine: "805 Ravi Block, Allama Iqbal Town, Multan Road, Lahore",
  locatedIn: "",                       // nothing listed for this venue
  hoursLine: "Open 24 hours",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Sapphire+Event+Complex+Allama+Iqbal+Town+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "Grand Sapphire Event Complex is Multan Road's go-to address for weddings and large celebrations, open around the clock to work around your family's schedule, not the other way round. A complex built to host everything from an intimate mehndi to a full walima with hundreds of guests.",

  // ---- Gallery images ----
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533895328492-8bb1eab48f24?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1000&auto=format&fit=crop"
  ],

  // ---- Trust strip shown right under the hero — pick whatever proves credibility fastest ----
  heroStats: [
    { value: "4.3★", label: "Average rating" },
    { value: "185+", label: "Celebrations hosted" },
    { value: "24/7", label: "Open every day" }
  ],

  // ---- Amenities ----
  amenities: [
    { icon: "guests",    label: "Up to 700 Guests" },
    { icon: "parking",   label: "Ample Parking" },
    { icon: "power",     label: "Backup Generator" },
    { icon: "catering",  label: "In-house Catering" },
    { icon: "sound",     label: "Sound & Stage Setup" },
    { icon: "ac",        label: "Fully Air-Conditioned" }
  ],

  // ---- Packages / pricing tiers ----
  packages: [
    {
      tier: "Silver",
      price: "Rs 1,900 / head",
      note: "Starting from",
      features: ["Elegant hall décor", "3-course menu", "Basic sound system", "Seating for up to 350"]
    },
    {
      tier: "Gold",
      price: "Rs 2,900 / head",
      note: "Most booked",
      features: ["Premium stage & floral décor", "5-course menu + live counters", "Full sound & lighting", "Seating for up to 500"],
      featured: true
    },
    {
      tier: "Platinum",
      price: "Rs 4,300 / head",
      note: "Full luxury",
      features: ["Signature bridal stage design", "Unlimited live counters", "Dedicated event coordinator", "Seating for up to 700"]
    }
  ],

  // ---- Testimonials ----
  testimonials: [
    { name: "Kamran S.", rating: 5, text: "Booked for a walima at short notice and they still pulled it off well — being open round the clock made planning so much easier." },
    { name: "Nadia F.", rating: 4, text: "Big, well-kept complex with enough parking for a large guest list. Staff were helpful throughout the event." },
    { name: "Ali H.", rating: 4, text: "Good value for the space you get. Décor team did a nice job with the stage for our mehndi." }
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
