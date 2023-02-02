import Image from "next/image";

// import heroImage from "../public/images/home/calvary_carpentry_banner.jpg";

import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/home/ProductCard";
import SectorOfService from "@/components/home/SectorOfService";
import OtherService from "@/components/home/OtherService";
import Timeline from "@/components/home/Timeline";

import { home } from "@/components/variables";

export default function Home() {
  return (
    <section className="home">
      <div className="hero" id="hero">
        <div className="hero__image">
          <Image {...home.hero.heroImage} />
        </div>
        <div className="hero__content">
          <h1>
            WE&apos;VE GOT WOOD<span> FOR YOU</span>.
          </h1>
          <h2>
            Avant-Garde woodworkers and visionaries forged from humble
            beginnings, Calvary is the timber expert for the next generation of
            property owners.
          </h2>
        </div>
      </div>

      <div className="clients">
        <SectionTitle title="clients" />
      </div>

      <div className="products">
        {home.products?.map((product, index) => {
          return <ProductCard key={index} props={product} />;
        })}
      </div>

      <div className="sector-services">
        <SectionTitle title="sector of services" />
        {home.sectors?.map((sector, index) => {
          return <SectorOfService key={index} props={sector} />;
        })}
      </div>

      <div className="other-services">
        <SectionTitle title="other services" />
        {home.otherServices?.map((service, index) => {
          return <OtherService key={index} props={service} />;
        })}
      </div>

      <div className="about">
        <SectionTitle title="About Calvary" />
        <Timeline />
        <div className="certificates">
          {home.certificates?.images?.map((img, index) => {
            return (
              <div className="certificate__image" key={index}>
                <Image {...img} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
