import { business } from "./business";

const defaultDescription =
  "Kinfolk Specialty Coffee in Padre Garcia, Batangas serves third wave coffee, comfort food, rice bowls, pasta, snacks, and late coffee runs.";

export const seoPages = {
  "/": {
    title: "Kinfolk Specialty Coffee | Coffee Shop in Padre Garcia, Batangas",
    description: defaultDescription,
  },
  "/menu": {
    title: "Menu | Kinfolk Specialty Coffee",
    description:
      "Explore Kinfolk Specialty Coffee's menu of espresso drinks, matcha, hojicha, rice bowls, pasta, sandwiches, wraps, snacks, and add-ons.",
  },
  "/about": {
    title: "About | Kinfolk Specialty Coffee",
    description:
      "Learn about Kinfolk Specialty Coffee, a Padre Garcia, Batangas coffee shop built around third wave coffee, comfort food, and everyday connection.",
  },
  "/location": {
    title: "Location | Kinfolk Specialty Coffee Padre Garcia",
    description: `Visit Kinfolk Specialty Coffee at ${business.location.address}. See hours, directions, and the Google Maps location.`,
  },
  "/contact": {
    title: "Contact | Kinfolk Specialty Coffee",
    description:
      "Contact Kinfolk Specialty Coffee by email, Instagram, or Facebook for shop questions, visit details, and updates.",
  },
  "/landing": {
    title: "Kinfolk Specialty Coffee | Brewing Connections",
    description: defaultDescription,
  },
};

export const defaultSeo = seoPages["/"];
