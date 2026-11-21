import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { business } from "../../data/business";
import { defaultSeo, seoPages } from "../../data/seo";

const STRUCTURED_DATA_ID = "revandbrew-static-structured-data";

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function getOrigin() {
  return business.siteUrl || window.location.origin;
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function buildStructuredData(origin, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${origin}/#cafe`,
    name: business.fullName,
    url: origin,
    description: defaultSeo.description,
    email: business.email,
    servesCuisine: ["Coffee"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Poblacion",
      addressLocality: "Padre Garcia",
      addressRegion: "Batangas",
      addressCountry: "PH",
    },
    hasMap: business.location.mapUrl,
    sameAs: [business.social.instagram, business.social.facebook],
    openingHoursSpecification: business.openingHoursSpecification,
    mainEntityOfPage: canonicalUrl,
  };
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const page = seoPages[path] || defaultSeo;
    const origin = getOrigin().replace(/\/$/, "");
    const canonicalUrl = `${origin}${path === "/" ? "" : path}`;

    document.title = page.title;

    setMeta('meta[name="description"]', {
      name: "description",
      content: page.description,
    });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    setMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: business.fullName,
    });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: page.title,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: page.description,
    });
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary",
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: page.title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: page.description,
    });
    setLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    let structuredData = document.getElementById(STRUCTURED_DATA_ID);
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = STRUCTURED_DATA_ID;
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(
      buildStructuredData(origin, canonicalUrl),
    );
  }, [pathname]);

  return null;
}
