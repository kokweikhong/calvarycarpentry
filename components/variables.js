import heroImage from "../public/images/home/calvary_carpentry_banner.jpg";
import productComposite from "../public/images/home/composite_banner.jpg";
import productWoodFlooring from "../public/images/home/wood_flooring_banner.jpg";
import productTimberDecking from "../public/images/home/timber_decking_banner.jpg";
import sectorGovernment from "../public/images/home/Calvary_Carpentry_Government.png";
import sectorCommercial from "../public/images/home/Calvary_Carpentry_Commercial.png";
import sectorResidential from "../public/images/home/Calvary_Carpentry_Residential.png";
import otherServiceStairsRails from "../public/images/home/stairs_and_rails.png";
import otherServiceTrellisScreens from "../public/images/home/trellis_and_screens.jpg";
import otherServiceCladdingFacade from "../public/images/home/cladding_and_facade.jpg";
import certBCA from "../public/images/home/BCA.png";
import certBizSafe from "../public/images/home/biz_safe.png";
import certNationalWoodFlooring from "../public/images/home/national_wood_flooring_association.png";
import certRegistered from "../public/images/home/registered.png";
import certSGMA from "../public/images/home/SGMA.png";
import certGreenCouncil from "../public/images/home/green_council.png";
import certBusinessBrand from "../public/images/home/top_business_brand.png";

export const home = {
  hero: {
    heroImage: {
      src: heroImage,
      title: "",
      alt: "",
    },
  },

  products: [
    {
      title: "Calvary Composite Decking",
      desc: "Designed with lasting beauty, aincredible durability and easy maintenance, there’s no compromising with high-performance composite decking. That’s why high-performance decking is the only type we make.",
      button: {
        text: "Zero maintenance wood",
        href: "",
      },
      img: {
        src: productComposite,
        alt: "Calvary Composite Decking",
        title: "Calvary Composite Decking",
      },
    },
    {
      title: "Wood Flooring",
      desc: "KANDINSKY Engineered Wood is handcrafted with oak native to Russia. To ensure maximum structural stability with minimum movement between the timber boards, the softwood core grains are laid and glued perpendicular to the top and bottom hardwood layers.",
      button: {
        text: "See our wood On the floor",
        href: "",
      },
      img: {
        src: productWoodFlooring,
        alt: "Wood Flooring",
        title: "Wood Flooring",
      },
    },
    {
      title: "Timber Decking",
      desc: "Decking is never better than when it’s made of real wood. The feel under foot of real wood, or the authentic look achieved with genuine wooden boards. Accoya delivers all this and much more.",
      button: {
        text: "Our hard decks on board",
        href: "",
      },
      img: {
        src: productTimberDecking,
        alt: "Timber Decking",
        title: "Timber Decking",
      },
    },
  ],

  sectors: [
    {
      title: "Government",
      img: {
        src: sectorGovernment,
        alt: "",
        title: "Government Sector",
      },
    },
    {
      title: "Commercial",
      img: {
        src: sectorCommercial,
        alt: "",
        title: "Commercial Sector",
      },
    },
    {
      title: "Residential",
      img: {
        src: sectorResidential,
        alt: "",
        title: "Residential Sector",
      },
    },
  ],

  otherServices: [
    {
      title: "Stairs & Rails",
      desc: "Timber stairs are normally installed over a steel framework and the main parts of timber stairs are the timber treads, risers, and landings while the nosing of the timber treads are optional, it is recommended as it “softens” the hard edges of the steps which prevent cuts if there is a case of a misstep.",
      img: {
        src: otherServiceStairsRails,
        alt: "",
        title: "Stairs & Rails",
      },
    },
    {
      title: "Trellis & Screens",
      desc: "Trellis a.k.a sun breakers provides shade and shelter from our tropical sun. The entire structure comprises of solid wood, industrial bolt and nuts and poly-carbonate. Timber trellis structures are mostly for outdoors and it is a popular form of shelter because they are versatile and can be design in a wide array of ways.",
      img: {
        src: otherServiceTrellisScreens,
        alt: "",
        title: "Trellis & Screens",
      },
    },
    {
      title: "Cladding / Facade",
      desc: "The type of timber used for exterior wall cladding are generally hardwood such as yellow balau or teak. It has a higher dimensional stability as well as janka hardness. Exceptions would include radiata / scotts pine — a softwood that is relatively hard that can be treated through Acetylation or kebonization (Accoya, Kebony)",
      img: {
        src: otherServiceCladdingFacade,
        alt: "",
        title: "Cladding / Facade",
      },
    },
  ],

  certificates: {
    images: [
      {
        src: certBCA,
        alt: "",
        title: "",
      },
      {
        src: certBizSafe,
        alt: "",
        title: "",
      },
      {
        src: certNationalWoodFlooring,
        alt: "",
        title: "",
      },
      {
        src: certRegistered,
        alt: "",
        title: "",
      },
      {
        src: certSGMA,
        alt: "",
        title: "",
      },
      {
        src: certGreenCouncil,
        alt: "",
        title: "",
      },
      {
        src: certBusinessBrand,
        alt: "",
        title: "",
      },
    ],
  },
};
