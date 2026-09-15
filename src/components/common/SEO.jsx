import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { business } from "../../data/business";
import { defaultSeo, seoPages } from "../../data/seo";

const STRUCTURED_DATA_ID = "kinfolk-static-structured-data";

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function getOrigin() {
  return import.meta.env.VITE_SITE_URL || business.siteUrl;
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
    "@type": "Restaurant",
    "@id": `${origin}/#restaurant`,
    name: business.fullName,
    url: origin,
    image: `${origin}/favicon.svg`,
    description: defaultSeo.description,
    email: business.email,
    servesCuisine: ["Coffee", "Cafe", "Comfort food"],
    priceRange: "₱₱",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Munting-Tubig - San Miguel Road",
      addressLocality: "Padre Garcia",
      addressRegion: "Batangas",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.8762488,
      longitude: 121.2089391,
    },
    hasMap: business.location.mapPlaceUrl,
    sameAs: [business.social.instagram, business.social.facebook],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "23:00",
      },
    ],
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
    const imageUrl = `${origin}/favicon.svg`;

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
    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
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
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
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
