import {AcercaCard} from "../AcercaCard";

const Acerca = () => (
  <section className="w-full ">
    <div className="bg-ola-color px-5" id="acerca-top">
      <AcercaCard id="ACERCA-HERO" />
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="var(--ola-color)"
          fillOpacity="1"
          d="M0,128L80,106.7C160,85,320,43,480,53.3C640,64,800,128,960,170.7C1120,213,1280,235,1360,245.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  </section>
);

export default Acerca;
