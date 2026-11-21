import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { business } from "../data/business";
import DisplayImg2 from "../assets/display2.jpg";

const contactLinks = [
  { label: "Email", value: business.email, href: `mailto:${business.email}` },
  {
    label: "Instagram",
    value: business.instagramHandle,
    href: business.social.instagram,
  },
  {
    label: "Facebook",
    value: business.name,
    href: business.social.facebook,
  },
];

export default function Contact() {
  return (
    <main className="bg-paper text-ink">
      <section className="grid min-h-[720px] pt-16 lg:min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-ink lg:order-1">
          <img
            src={DisplayImg2}
            alt="Café table detail"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 lg:order-2 lg:px-[13%] lg:py-20">
          <div className="w-full max-w-xl">
            <span className="label text-stone-700">Contact Rev &amp; Brew</span>
            <h1 className="mt-5 font-main text-5xl font-bold leading-[0.9] tracking-tight text-ink md:text-7xl">
              Say hello. Then swing by.
            </h1>
            <p className="mt-7 max-w-lg font-serif text-2xl leading-tight text-ink md:text-3xl">
              Your next coffee run is just a message away.
            </p>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-ash">
              Ask us what's on the menu, check the latest pop-up updates, or
              get directions. Find us by email, on Instagram, and on Facebook.
            </p>

            <div className="mt-12 border-y border-ink/15">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-ink/15 py-4 last:border-b-0"
                >
                  <span className="text-xs text-ash">{item.label}</span>
                  <span className="break-words text-sm text-ink">{item.value}</span>
                  <ArrowRight
                    size={16}
                    className="text-ash transition-transform group-hover:translate-x-1 group-hover:text-ink"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ash">
              <Link
                to="/location"
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-ash"
              >
                Find the pop-up <ArrowRight size={15} />
              </Link>
              <span>Open daily until midnight</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
