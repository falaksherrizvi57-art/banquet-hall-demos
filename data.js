/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   Every field is explained with a comment.
   ============================================================ */

const HALL_DATA = {

  // ---- Identity ----
  name: "Taj Mahal Banquet Hall",
  nameUrdu: "تاج محل ہال",
  tagline: "Where Lahore Celebrates Forever",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 4.0,
  reviewCount: 652,

  // ---- Contact ----
  phoneDisplay: "+92 321 9420809",
  phoneLink: "+923219420809",          // digits only, used for tel: link
  whatsappNumber: "923219420809",      // digits only, no + , used for wa.me link

  // ---- Location ----
  addressLine: "Near Al Rehman Gardens Phase 2, Jaranwala Rd, Naain Sukh, Lahore",
  locatedIn: "Al-Rahman Service Station",
  hoursLine: "Open today · Closes 10 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Banquet+Hall+Jaranwala+Rd+Naain+Sukh+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "For over a decade, Taj Mahal Banquet Hall has hosted Lahore's weddings, walimas and mehndis with the grandeur its name promises. Marble floors, gold detailing and a hall built to hold your biggest celebrations — Taj Mahal Banquet Hall gives every guest an evening they won't forget.",

  // ---- Gallery images (mix of sizes handled automatically) ----
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533895328492-8bb1eab48f24?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1000&auto=format&fit=crop"
  ],

  // ---- Amenities (icon key must match one defined in index.html) ----
  amenities: [
    { icon: "guests",    label: "Up to 800 Guests" },
    { icon: "parking",   label: "Secure Parking" },
    { icon: "power",     label: "Backup Generator" },
    { icon: "catering",  label: "In-house Catering" },
    { icon: "sound",     label: "Sound & Stage Setup" },
    { icon: "ac",        label: "Fully Air-Conditioned" }
  ],

  // ---- Packages / pricing tiers ----
  packages: [
    {
      tier: "Silver",
      price: "Rs 1,800 / head",
      note: "Starting from",
      features: ["Standard hall décor", "3-course menu", "Basic sound system", "Seating for up to 400"]
    },
    {
      tier: "Gold",
      price: "Rs 2,800 / head",
      note: "Most booked",
      features: ["Premium stage & floral décor", "5-course menu + live counters", "Full sound & lighting", "Seating for up to 600"],
      featured: true
    },
    {
      tier: "Platinum",
      price: "Rs 4,200 / head",
      note: "Full luxury",
      features: ["Signature bridal stage design", "Unlimited live counters", "Dedicated event coordinator", "Seating for up to 800"]
    }
  ],

  // ---- Testimonials (can reuse real review text if the client gives permission) ----
  testimonials: [
    { name: "Ayesha R.", rating: 5, text: "Our walima was beautiful. The staff handled everything, we didn't have to worry about a thing." },
    { name: "Bilal M.", rating: 4, text: "Great hall for a big guest list. Food was excellent, parking could be better on peak nights." },
    { name: "Sana K.", rating: 5, text: "Booked the Gold package for my sister's mehndi. The stage design was stunning." }
  ]

};
