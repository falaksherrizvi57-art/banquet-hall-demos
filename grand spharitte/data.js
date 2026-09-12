```js
/* ============================================================
   HALL_DATA — the ONLY file you edit for a new client.
   Copy this file, change the values below, keep index.html untouched.
   Every field is explained with a comment.
   ============================================================ */

window.HALL_DATA = {

  // ---- Identity ----
  name: "Grand Sapphire Event Complex",
  nameUrdu: "گرینڈ سیفائر ایونٹ کمپلیکس",
  tagline: "Where Grand Celebrations Become Lasting Memories",

  // ---- Google-style reputation strip (pulled from their Maps listing) ----
  rating: 4.3,
  reviewCount: 185,

  // ---- Contact ----
  phoneDisplay: "+92 321 0829829",
  phoneLink: "+923210829829",          // digits only, used for tel: link
  whatsappNumber: "923210829829",      // digits only, no + , used for wa.me link

  // ---- Location ----
  addressLine: "805 Ravi Block, Allama Iqbal Town, Multan Road, Ravi Block, Allama Iqbal Town, Lahore, Pakistan",
  locatedIn: "Allama Iqbal Town, Lahore",
  hoursLine: "Open 24 hours",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Sapphire+Event+Complex+Lahore",

  // ---- Hero background image ----
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",

  // ---- Short story / about paragraph ----
  story: "Grand Sapphire Event Complex is a wedding and event venue in Lahore, offering a dedicated space for memorable celebrations and special occasions. Located in Allama Iqbal Town, Lahore, the venue is available for weddings and events.",

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
    { icon: "guests",    label: "Wedding & Event Venue" },
    { icon: "parking",   label: "Convenient Lahore Location" },
    { icon: "power",     label: "Available 24 Hours" }
  ],

  // ---- Packages / pricing tiers ----
  packages: [
    {
      tier: "Wedding",
      price: "Contact Us",
      note: "For Wedding Events",
      features: [
        "Wedding venue",
        "Event space",
        "Custom arrangements",
        "Contact us for details"
      ]
    },
    {
      tier: "Celebration",
      price: "Contact Us",
      note: "For Special Events",
      features: [
        "Event venue",
        "Flexible arrangements",
        "Special occasions",
        "Contact us for details"
      ],
      featured: true
    },
    {
      tier: "Event",
      price: "Contact Us",
      note: "Plan Your Event",
      features: [
        "Dedicated event space",
        "Wedding celebrations",
        "Event arrangements",
        "Contact us for details"
      ]
    }
  ],

  // ---- Testimonials ----
  // No individual review text was provided, so no fabricated testimonials are used.
  testimonials: []

};
```
