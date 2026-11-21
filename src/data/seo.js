import { business } from "./business";

const defaultDescription =
  "Rev & Brew is a pop-up café in Poblacion, Padre Garcia, Batangas. Drop by for evening coffee, good company, and your next coffee run. Open daily until midnight.";

export const seoPages = {
  "/": {
    title: "Rev & Brew | Pop-up Café in Padre Garcia, Batangas",
    description: defaultDescription,
  },
  "/menu": {
    title: "Menu | Rev & Brew",
    description:
      "Find your next cup at Rev & Brew. Check our social pages for the latest pop-up menu, drink prices, and availability in Padre Garcia, Batangas.",
  },
  "/about": {
    title: "About | Rev & Brew",
    description:
      "Meet Rev & Brew, your evening pop-up coffee stop in Poblacion, Padre Garcia, Batangas. Good coffee, familiar faces, and a reason to take a break.",
  },
  "/location": {
    title: "Location & Hours | Rev & Brew",
    description: `Find Rev & Brew in ${business.location.address}. Open Monday–Saturday, 6 PM–midnight, and Sunday, 4 PM–midnight.`,
  },
  "/contact": {
    title: "Contact | Rev & Brew",
    description:
      "Contact Rev & Brew by email, Instagram, or Facebook for the latest menu, pop-up updates, and help planning your next coffee stop.",
  },
  "/landing": {
    title: "Rev & Brew | Your Next Coffee Stop",
    description: defaultDescription,
  },
};

export const defaultSeo = seoPages["/"];
