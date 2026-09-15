import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import heroImg from "../../assets/heroimg.jpg";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-0 overflow-hidden bg-ink text-paper">
      <img
        src={heroImg}
        alt="Kinfolk dishes on a wooden table"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/55 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[1600px] flex-col justify-end gap-6 px-6 pb-8 pt-20 md:px-10 md:pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
        <div className="max-w-2xl">
          <p className="label mb-3 text-paper/75 md:mb-4">
            Third wave coffee club
          </p>
          <h1 className="font-main text-[clamp(3.7rem,7.25vw,8rem)] leading-[0.82] tracking-[-0.045em] text-paper">
            Coffee
            <br />
            for the <br />
            <em className="font-main">people.</em>
          </h1>
          <Link
            to="/menu"
            className="mt-5 inline-flex items-center gap-3 border-b border-paper/70 pb-2 label text-[10px] text-paper transition-colors hover:border-primary hover:text-primary md:mt-6"
          >
            Explore the menu <ArrowDownRight size={16} strokeWidth={1.5} />
          </Link>
        </div>

        <p className="max-w-[11rem] self-end text-right font-main text-xl leading-[1.05] text-paper/90 md:text-2xl lg:mb-1">
          Come in.
          <br />
          Take your time.
          <br />
          Stay awhile.
        </p>
      </div>
    </section>
  );
}
