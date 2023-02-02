import Image from "next/image";

export default function OtherService({ props }) {
  return (
    <div className="other-service">
      <div className="other-service__image">
        <Image {...props.img} />
      </div>
      <div className="other-service__content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
