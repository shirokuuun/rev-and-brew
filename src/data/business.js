const mapQuery = "Rev & Brew, Poblacion, Padre Garcia, Batangas";

export const business = {
  name: "Rev & Brew",
  fullName: "Rev & Brew",
  slogan: "Good coffee. Good company. One more stop.",
  // Set VITE_SITE_URL to the production domain when it is ready.
  siteUrl: import.meta.env.VITE_SITE_URL || "",
  instagramHandle: "@_revandbrew",
  email: "revandbrew2026@gmail.com",
  location: {
    branch: "Poblacion, Padre Garcia",
    address: "Poblacion, Padre Garcia, Batangas",
    description:
      "Your evening coffee stop in Poblacion, Padre Garcia, Batangas. Swing by the pop-up, grab a cup, and make a night of it.",
    mapQuery,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
    mapEmbed:
      "https://www.google.com/maps?q=Poblacion%2C%20Padre%20Garcia%2C%20Batangas&z=16&output=embed",
  },
  social: {
    instagram: "https://www.instagram.com/_revandbrew/",
    facebook: "https://www.facebook.com/revandbrew",
  },
  hours: [
    { day: "Monday – Saturday", time: "6:00 PM – 12:00 AM" },
    { day: "Sunday", time: "4:00 PM – 12:00 AM" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "16:00",
      closes: "00:00",
    },
  ],
};
