import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DisplayImg from "../assets/display1.jpg";
import DisplayImg2 from "../assets/display2.jpg";
import HeroImg from "../assets/heroimg.jpg";
import DetailImg from "../assets/img1.jpg";
import ThirdWaveImg from "../assets/thirdwaveimg.jpg";

const galleryImages = [
  { src: DisplayImg, alt: "Kinfolk coffee shop seating" },
  { src: DetailImg, alt: "Kinfolk specialty coffee detail" },
  { src: HeroImg, alt: "Kinfolk food spread" },
  { src: DisplayImg2, alt: "Kinfolk coffee shop counter" },
  { src: ThirdWaveImg, alt: "Kinfolk coffee brewing" },
];

export default function About() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
        <img
          src={HeroImg}
          alt="Kinfolk Specialty Coffee shop interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 flex max-w-lg flex-col items-center px-6 text-center">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-6 bg-ash-light" />
            <span className="label text-ash-light">Third Wave Coffee Club</span>
            <div className="h-px w-6 bg-ash-light" />
          </div>

          <h1 className="mb-2 font-main text-6xl font-bold leading-none tracking-tight text-paper md:text-8xl">
            Kinfolk
          </h1>

          <span className="mb-8 label text-[10px] text-primary md:text-xs">
            Specialty Coffee
          </span>

          <p className="mb-9 max-w-sm text-sm font-medium leading-relaxed text-paper/85">
            Third wave specialty coffee where every cup tells a story. Come for
            the coffee, stay for the community.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="flex items-center gap-2 bg-paper px-7 py-3 label text-[10px] text-ink transition-colors hover:bg-primary"
            >
              View menu <ArrowRight size={14} />
            </Link>
            <Link
              to="/location"
              className="border border-paper/40 px-7 py-3 label text-[10px] text-paper transition-colors hover:border-paper hover:bg-white/10"
            >
              Find us
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f4f1e4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label text-stone-700">01 — Why Kinfolk</span>
            <h2 className="mt-4 font-main text-5xl font-bold uppercase leading-[0.86] tracking-[-0.04em] text-ink md:text-7xl">
              Everything you need for a good pause
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone-700">
              Kinfolk is made for slow mornings, catch-ups, and quiet time.
              Come in, settle down, and enjoy coffee made properly.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-[210px_150px_120px]">
            <figure className="relative min-h-[260px] overflow-hidden bg-primary sm:row-span-2 md:col-span-3 md:min-h-0">
              <img src={DisplayImg} alt={galleryImages[0].alt} className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative min-h-[260px] overflow-hidden bg-primary md:col-span-6 md:row-span-2 md:min-h-0">
              <img src={HeroImg} alt={galleryImages[2].alt} className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative min-h-[190px] overflow-hidden bg-primary md:col-span-3 md:min-h-0">
              <img src={DetailImg} alt={galleryImages[1].alt} className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative min-h-[220px] overflow-hidden bg-primary md:col-span-3 md:row-span-2 md:min-h-0">
              <img src={DisplayImg2} alt={galleryImages[3].alt} className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative min-h-[180px] overflow-hidden bg-primary sm:col-start-2 md:col-span-3 md:col-start-6 md:min-h-0">
              <img src={ThirdWaveImg} alt={galleryImages[4].alt} className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f4f1e4] pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <span className="label text-stone-700">02 — Inside Kinfolk</span>
          <h2 className="mt-3 font-main text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-ink md:text-6xl">
            A space to slow down
          </h2>
        </div>
        <div className="mt-8 flex overflow-hidden" aria-label="Kinfolk photo gallery">
          <div className="image-marquee-track flex w-max">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4" aria-hidden={group === 1}>
                {galleryImages.map((image) => (
                  <figure key={`${group}-${image.alt}`} className="h-56 w-44 shrink-0 overflow-hidden bg-primary sm:h-72 sm:w-56 md:h-80 md:w-64">
                    <img src={image.src} alt={group === 0 ? image.alt : ""} className="h-full w-full object-cover" />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
