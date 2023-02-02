import Image from "next/image";

import svgCalendar from "../../public/images/home/calendar.svg";
import svgLike from "../../public/images/home/like.svg";
import svgAnchor from "../../public/images/home/anchor.svg";

export default function Timeline() {
  return (
    <div className="timeline">
      <article>
        <div className="inner">
          <div className="timeline-logo">
            <Image src={svgCalendar} alt="" />
          </div>
          <h3>2021</h3>
          <p>Relocated to 37 Senoko Way</p>
          <p>Started Online cart floormart.sg</p>
        </div>
      </article>
      <article>
        <div className="inner">
          <div className="timeline-logo">
            <Image src={svgLike} alt="" />
          </div>
          <h3>2020</h3>
          <p>
            <strong>
              <a href="https://www.bca.gov.sg/BCADirectory/Company/Details/201407349E">
                BCA General Builder Class 2
              </a>
            </strong>{" "}
            under CR06,FM03
          </p>
          <p>Acquired Seng Hock Choon Trading (Wood Profiler)</p>
        </div>
      </article>
      <article>
        <div className="inner">
          <div className="timeline-logo">
            <Image src={svgAnchor} alt="" />
          </div>
          <h3>2019</h3>
          <p>
            Calvary Carpentry Pte Ltd acquired Jit Heng Wood Products (est.
            1996).
          </p>
        </div>
      </article>
      <article>
        <div className="inner">
          <div className="timeline-logo">
            <Image src={svgLike} alt="" />
          </div>
          <h3>2016</h3>
          <p>
            <strong>
              <a href="https://www.bca.gov.sg/BCADirectory/Company/Details/201407349E">
                BCA registered contractor
              </a>
            </strong>{" "}
            under MWO 3
          </p>
          <p>
            Developed <strong>Ez-Rail system</strong> with CDG
          </p>
        </div>
      </article>
      <article>
        <div className="inner">
          <div className="timeline-logo">
            <Image src={svgAnchor} alt="" />
          </div>
          <h3>2014/2015</h3>
          <p>
            Calvary Carpentry Pte Ltd was established. We converted from a sole
            proprietorship to a limited exempt company.
          </p>
          <p>
            <strong>SCAL</strong> Registered
          </p>
        </div>
      </article>
      <article>
        <div className="inner">
          <div className="timeline-logo">
            <Image src={svgLike} alt="" />
          </div>
          <h3>2011/2012</h3>
          <p>Sole Proprietor</p>
          <p>
            <strong>NWFA</strong> registered
          </p>
        </div>
      </article>
    </div>
  );
}
