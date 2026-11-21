# Rev & Brew

React and Vite website for Rev & Brew, a pop-up café in Poblacion, Padre Garcia, Batangas.

## Development

```sh
npm install
npm run dev
```

Run `npm run build` for a production build and `npm run lint` to check the source.

## Content

Business details, social links, email, and hours live in `src/data/business.js`. Hours are Monday–Saturday, 6 PM–midnight, and Sunday, 4 PM–midnight. Page titles and descriptions live in `src/data/seo.js`; keep the static metadata in `index.html` consistent when updating business details.

The existing food and drink listings and prices are retained as **draft content**, as requested. Update `src/data/coffee.js` and `src/data/food.js` with the confirmed menu before removing the draft notices in `Menu.jsx` and `MenuPreview.jsx`.

Photos, drink images, video, fonts, and favicon are unchanged for the separate asset pass. The navigation and entry menu use the supplied scooter logo in `src/assets/revandbrew-scooter.png` through `BrandMark.jsx`.

The location map shows the Poblacion area. Its directions link searches for Rev & Brew rather than reusing the former café's pin. Replace these with a verified pin when available.

## Production URL

Copy `.env.example` to `.env.local` and set `VITE_SITE_URL` to the confirmed production origin if needed. Otherwise, runtime canonical and sharing URLs use the current site's origin. The old brand's sitemap and robots sitemap reference were removed; add a sitemap for the confirmed domain before launch.

Brand content was informed by [Rev & Brew on Facebook](https://www.facebook.com/revandbrew), the supplied wordmark and scooter references, and the confirmed hours and email. The linked Instagram account is [@_revandbrew](https://www.instagram.com/_revandbrew/).
