import { useState, useEffect, useSyncExternalStore } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { business } from "../../data/business";
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
];

const waitForTopThen = (callback) => {
  const startedAt = window.performance.now();

  const checkScroll = () => {
    if (window.scrollY <= 2 || window.performance.now() - startedAt > 1000) {
      callback();
      return;
    }

    window.requestAnimationFrame(checkScroll);
  };

  window.requestAnimationFrame(checkScroll);
};

const subscribeToScroll = (callback) => {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
};

const getScrollState = () => window.scrollY > 24;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollState,
    () => false,
  );
  const location = useLocation();
  const navigate = useNavigate();

  // Contact starts on a light split layout, so keep the dark header visible
  // there instead of allowing the white wordmark and Contact link to disappear.
  const hasOverlayHero = ["/", "/about"].includes(location.pathname);
  const solidHeader = scrolled || !hasOverlayHero;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (event, to) => {
    if (
      event.defaultPrevented ||
      (typeof event.button === "number" && event.button !== 0) ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    setOpen(false);

    const shouldNavigate = location.pathname !== to;
    if (!shouldNavigate) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    if (window.scrollY <= 2) {
      navigate(to);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    waitForTopThen(() => {
      navigate(to);
    });
  };

  const desktopLeftLinks = links.filter((link) =>
    ["/menu", "/about", "/location"].includes(link.to),
  );
  const contactLink = links.find((link) => link.to === "/contact");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
        solidHeader
          ? "border-white/10 bg-stone-800 shadow-lg shadow-ink/10"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 z-10 -translate-x-1/2 transition-transform hover:scale-[1.02]"
          aria-label="Kinfolk home"
        >
          <span className="font-main text-2xl font-bold tracking-tight text-paper">
            Kinfolk
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {desktopLeftLinks.map((link) => {
            const isActive = location.pathname === link.to;

            if (isActive) {
              return (
                <a
                  key={link.to}
                  href={`${link.to}#page-top`}
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="label text-[9px] text-paper transition-colors"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={(event) => handleNavClick(event, link.to)}
                className={`label text-[9px] transition-colors ${
                  isActive ? "text-paper" : "text-ash hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Socials */}
        <div className="hidden items-center gap-5 md:flex">
          {contactLink && (
            <Link
              to={contactLink.to}
              onClick={(event) => handleNavClick(event, contactLink.to)}
              className={`label text-[9px] transition-colors ${
                location.pathname === contactLink.to
                  ? "text-paper"
                  : "text-ash-light hover:text-paper"
              }`}
            >
              {contactLink.label}
            </Link>
          )}
          <span className="h-3 w-px bg-paper/30" />
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kinfolk on Instagram"
          >
            <InstagramIcon
              size={16}
              className="text-ash hover:text-paper transition-colors"
            />
          </a>
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kinfolk on Facebook"
          >
            <FacebookIcon
              size={16}
              className="text-ash hover:text-paper transition-colors"
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="z-20 ml-auto text-paper md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-ink z-50 flex flex-col md:hidden">
          <div className="relative flex h-16 items-center justify-end border-b border-white/10 px-6">
            <span className="absolute left-1/2 -translate-x-1/2 font-main text-2xl font-bold text-paper">
              Kinfolk
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-paper"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center items-start px-8 gap-6">
            {links.map((link) => {
              const isActive = location.pathname === link.to;

              if (isActive) {
                return (
                  <a
                    key={link.to}
                    href={`${link.to}#page-top`}
                    onClick={() => {
                      setOpen(false);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="font-main text-4xl text-paper"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(event) => handleNavClick(event, link.to)}
                  className={`font-main text-4xl ${
                    isActive ? "text-paper" : "text-ash-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex gap-6 px-8 pb-10">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} className="text-ash" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} className="text-ash" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
