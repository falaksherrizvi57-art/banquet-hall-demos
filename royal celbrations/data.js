/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   Every field is explained with a comment.
   ============================================================ */

window.HALL_DATA = {

  // ---- Identity ----
  name: "Royal Celebrations Marriage Hall",
  nameUrdu: "",                        // none listed on this business's Maps profile
  tagline: "A Royal Setting For Your Biggest Day",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 4.6,
  reviewCount: 63,

  // ---- Contact ----
  phoneDisplay: "+92 300 0807603",
  phoneLink: "+923000807603",
  whatsappNumber: "923000807603",

  // ---- Location ----
  addressLine: "J77C+V9V, Taragarh, Shahdara Town, Lahore",
  locatedIn: "",                       // nothing listed for this venue
  hoursLine: "Open today · Closes 10 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Celebrations+Marriage+Hall+Taragarh+Shahdara+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "Royal Celebrations Marriage Hall has built its name on exactly that — a grand, genuinely royal look that guests notice the moment they walk in. Attentive staff, generous parking and a hall built to make every wedding, walima or mehndi feel like the main event Shahdara talks about for years.",

  // ---- Gallery images ----
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533895328492-8bb1eab48f24?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop"
  ],

  // ---- Trust strip shown right under the hero — pick whatever proves credibility fastest ----
  heroStats: [
    { value: "4.6★", label: "Average rating" },
    { value: "63+", label: "Celebrations hosted" },
    { value: "600", label: "Guest capacity" }
  ],

  // ---- Amenities ----
  amenities: [
    { icon: "guests",    label: "Up to 600 Guests" },
    { icon: "parking",   label: "Generous Parking" },
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
      features: ["Elegant hall décor", "3-course menu", "Basic sound system", "Seating for up to 300"]
    },
    {
      tier: "Gold",
      price: "Rs 2,900 / head",
      note: "Most booked",
      features: ["Royal stage & floral décor", "5-course menu + live counters", "Full sound & lighting", "Seating for up to 450"],
      featured: true
    },
    {
      tier: "Platinum",
      price: "Rs 4,400 / head",
      note: "Full luxury",
      features: ["Signature royal bridal stage", "Unlimited live counters", "Dedicated event coordinator", "Seating for up to 600"]
    }
  ],

  // ---- Testimonials — adapted from this venue's real Google reviews ----
  testimonials: [
    { name: "Mahil A.", rating: 5, text: "A genuinely royal look — the moment you walk in you understand the name. Staff were attentive from management down to the floor team." },
    { name: "Rizwan M.", rating: 5, text: "Gorgeous hall in Shahdara with plenty of parking. Highly recommend for a wedding or walima." },
    { name: "Sadia K.", rating: 4, text: "Beautiful décor and a hall that photographs really well — guests were commenting on the ambiance all night." }
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
