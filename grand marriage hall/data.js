/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   Every field is explained with a comment.
   ============================================================ */

window.HALL_DATA = {

  // ---- Identity ----
  name: "Grand Marriage Hall",
  nameUrdu: "گرینڈ میرج ہال",
  tagline: "Grand Beginnings, Grander Memories",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 4.1,
  reviewCount: 133,

  // ---- Contact ----
  phoneDisplay: "+92 300 9533460",
  phoneLink: "+923009533460",          // digits only, used for tel: link
  whatsappNumber: "923009533460",      // digits only, no + , used for wa.me link

  // ---- Location ----
  addressLine: "نزد مدرسہ تعلیم الاسلام، سگیاں، بائی پاس روڈ, Naain Sukh, Lahore",
  locatedIn: "",                       // nothing listed for this venue, left blank on purpose
  hoursLine: "Open today · Closes 9 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Marriage+Hall+Bypass+Road+Naain+Sukh+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "Grand Marriage Hall has been a trusted address for Lahore's weddings and events for years, known for spacious seating, warm hospitality and a team that handles every detail so your family can simply enjoy the evening.",

  // ---- Gallery images (mix of sizes handled automatically) ----
  gallery: [
    "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533895328492-8bb1eab48f24?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1000&auto=format&fit=crop"
  ],

  // ---- Amenities (icon key must match one defined in index.html) ----
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
      price: "Rs 1,600 / head",
      note: "Starting from",
      features: ["Standard hall décor", "3-course menu", "Basic sound system", "Seating for up to 250"]
    },
    {
      tier: "Gold",
      price: "Rs 2,400 / head",
      note: "Most booked",
      features: ["Stage & floral décor", "5-course menu + live counters", "Full sound & lighting", "Seating for up to 400"],
      featured: true
    },
    {
      tier: "Platinum",
      price: "Rs 3,500 / head",
      note: "Full luxury",
      features: ["Signature bridal stage design", "Unlimited live counters", "Dedicated event coordinator", "Seating for up to 500"]
    }
  ],

  // ---- Testimonials ----
  testimonials: [
    { name: "Fatima N.", rating: 5, text: "Very good service from start to finish — the staff made sure everything ran smoothly on the day." },
    { name: "Usman T.", rating: 4, text: "Solid hall for a mid-size wedding. Good value and the team was easy to work with." },
    { name: "Hina S.", rating: 4, text: "Booked for a walima, guests were comfortable and the food was well received." }
  ]

};
