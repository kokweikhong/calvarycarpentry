import Image from "next/image";

export default function SectorOfService({ props }) {
  return (
    <div className="sector">
      <div className="sector__image">
        <Image {...props.img} />
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}
