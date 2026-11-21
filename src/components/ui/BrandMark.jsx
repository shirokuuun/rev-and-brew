import scooterLogo from "../../assets/revandbrew-scooter.png";

export default function BrandMark({ className = "" }) {
  return (
    <span className={`brand-mark ${className}`}>
      <span className="brand-mark__speed" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-mark__bike">
        <img
          src={scooterLogo}
          alt="Rev & Brew scooter logo"
          width={493}
          height={506}
          draggable={false}
          className="brand-mark__image"
        />
      </span>
    </span>
  );
}
