import Image from "next/image";

export default function ProductCard({ props }) {
  return (
    <div className="product__card">
      <div className="product__content">
        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <a href={props.button?.href}>{props.button?.text}</a>
        </div>
      </div>
      <div className="product__image">
        <Image {...props.img}></Image>
      </div>
    </div>
  );
}
