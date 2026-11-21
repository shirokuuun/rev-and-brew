import { Link } from "react-router-dom";
import DisplayImg from "../../assets/display1.jpg";
import DisplayImg2 from "../../assets/display2.jpg";

export default function ShopStory() {
  return (
    <section className="bg-paper py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-end gap-3 md:grid-cols-[0.42fr_0.9fr_0.68fr] md:gap-8">
          <span className="label text-[9px] text-stone-700">
            The Rev &amp; Brew feeling
          </span>
          <h2 className="max-w-sm font-main text-4xl font-bold leading-[0.88] tracking-tight text-ink md:text-7xl md:leading-[0.84]">
            One more stop.
          </h2>
          <p className="max-w-xs text-xs leading-relaxed text-ash md:pb-1 md:text-sm">
            A cup after a long day, a catch-up with the crew, or a quick detour
            that turns into your favorite part of the night.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-7 md:gap-5">
          <Link
            to="/location"
            className="group relative aspect-[4/5] overflow-hidden bg-ink"
          >
            <img
              src={DisplayImg}
              alt="Coffee Shop"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 md:p-7">
              <span className="label text-[9px] text-primary">Together</span>
              <p className="mt-2 max-w-[10ch] font-main text-2xl font-semibold leading-[0.92] text-white md:text-5xl">
                Check out our coffee shop
              </p>
              <span className="mt-3 inline-flex items-center gap-2 label text-[8px] text-white md:mt-5 md:text-[9px]">
                Find us <ArrowRight size={13} />
              </span>
            </div> */}
          </Link>

          <Link
            to="/contact"
            className="group relative aspect-[4/5] overflow-hidden bg-ink"
          >
            <img
              src={DisplayImg2}
              alt="Coffee Shop"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 md:p-7">
              <span className="label text-[8px] text-primary md:text-[9px]">
                Try new flavors first
              </span>
              <p className="mt-2 max-w-[12ch] font-main text-2xl font-semibold leading-[0.92] text-white md:text-5xl">
                Catch up properly.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 label text-[8px] text-white md:mt-5 md:text-[9px]">
                Get in touch <ArrowRight size={13} />
              </span>
            </div> */}
          </Link>
        </div>
      </div>
    </section>
  );
}
