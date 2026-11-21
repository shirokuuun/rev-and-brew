import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons";
import { business } from "../../data/business";
import homeVideo from "../../assets/homeVid.mp4";
import BrandMark from "../ui/BrandMark";

const sections = [
  {
    key: "home",
    label: "Home",
    to: "/",
    description: "Your next coffee stop starts here.",
  },
  {
    key: "menu",
    label: "Menu",
    to: "/menu",
    description: "Find out what's brewing at the pop-up.",
  },
  {
    key: "about",
    label: "About",
    to: "/about",
    description: "Good coffee, good company, and the open road.",
  },
  {
    key: "location",
    label: "Location",
    to: "/location",
    description: "Poblacion, Padre Garcia. See you tonight.",
  },
  {
    key: "contact",
    label: "Contact",
    to: "/contact",
    description: "Drop us a message before you drop by.",
  },
];

const media = {
  home: { type: "video", src: homeVideo },
  menu: null,
  about: null,
  location: null,
  contact: null,
};

export default function Landing({ onEnter }) {
  const [phase, setPhase] = useState("logo");
  const [activeKey, setActiveKey] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 700);
    const t2 = setTimeout(() => setPhase("ready"), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleSelect = (section) => {
    sessionStorage.setItem("revandbrew_entered", "true");
    onEnter?.();
    navigate(section.to);
  };

  const active = sections.find((s) => s.key === activeKey);
  const activeMedia = media[activeKey];

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-ink flex">
      {/* Left: white panel, fixed width, all the way to the screen edge */}
      <div className="relative w-full md:w-140 h-full bg-paper flex flex-col items-center justify-center px-10">
        <div
          className={`absolute left-1/2 -translate-x-1/2 transition-all ease-out duration-700 ${
            phase === "logo"
              ? "top-1/2 -translate-y-1/2"
              : "top-14 translate-y-0"
          }`}
        >
          <button
            type="button"
            onClick={() => handleSelect(sections[0])}
            aria-label={`Enter ${business.name} home`}
            className="brand-mark-trigger rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            <BrandMark className="h-24 w-24 md:h-28 md:w-28" />
          </button>
        </div>

        {/* Nav + description, side by side */}
        <div
          className={`flex items-center gap-10 transition-all duration-700 ease-out ${
            phase === "logo"
              ? "opacity-0 translate-y-3 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <nav className="flex flex-col gap-5 w-28 shrink-0">
            {sections.map((section, i) => {
              const isActive = activeKey === section.key;
              return (
                <button
                  key={section.key}
                  onMouseEnter={() => setActiveKey(section.key)}
                  onClick={() => handleSelect(section)}
                  style={{
                    transitionDelay: phase === "reveal" ? `${i * 80}ms` : "0ms",
                  }}
                  className={`label text-left text-[13px]! tracking-[0.25em] transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-ash hover:text-ink"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          <div className="w-px h-24 bg-ash/20 shrink-0" />
          <div className="w-40 shrink-0">
            <p
              key={activeKey}
              className={`text-ash text-[13px] leading-relaxed tracking-[0.05em] ${
                phase === "ready" ? "animate-fade-in" : "opacity-0"
              }`}
            >
              {active?.description}
            </p>
          </div>
        </div>

        {/* Socials */}
        <div
          className={`absolute bottom-10 flex gap-5 transition-opacity duration-700 ${
            phase === "ready" ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon
              size={16}
              className="text-ash hover:text-ink transition-colors"
            />
          </a>
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon
              size={16}
              className="text-ash hover:text-ink transition-colors"
            />
          </a>
        </div>
      </div>

      {/* Right: video, flexible width, fills remaining space */}
      <div className="relative flex-1 h-full hidden md:block">
        {activeMedia?.type === "video" ? (
          <video
            key={activeKey}
            src={activeMedia.src}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              phase === "ready" ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : activeMedia?.type === "image" ? (
          <img
            key={activeKey}
            src={activeMedia.src}
            alt={active?.label}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              phase === "ready" ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-ink-soft" />
        )}
      </div>
    </div>
  );
}
