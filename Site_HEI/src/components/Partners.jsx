import Nexta from "./../assets/photo/LOGO-NEXTA.webp";
import PN from "./../assets/photo/PN_Logo_baseline_color_ENG.png";
import Yooz from "./../assets/photo/Yooz-2023-Logo-2.webp";
import Etech from "./../assets/photo/logo-etech.png";
import Emit from "./../assets/photo/logo_emit.png";
import Numer from "./../assets/photo/Logo-Numer-vf.png";
import BPartners from "./../assets/photo/bp-logo-full-1024x331.webp";
import YF from "./../assets/photo/YIF_LOGO_512x512_BL_on_WH-1.webp";
import Kante from "./../assets/photo/logo-kante-company-1.png";

const PartnerLogo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="h-20 w-auto mx-auto"
  />
);

export const Partners = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-serif text-[#424d71] text-center mb-8">
        Nos partenaires
      </h2>
      <p className="text-center mb-12 max-w-4xl mx-auto text-lg">
        L'employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique et de la composition 
        de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <PartnerLogo src={Nexta} alt="Nexta" />
        <PartnerLogo src={PN} alt="Passerelles Numériques" />
        <PartnerLogo src={Yooz} alt="Yooz" />
        <PartnerLogo src={Etech} alt="Etech" />
        <PartnerLogo src={Emit} alt="EMIT" />
        <PartnerLogo src={Numer} alt="Numer" />
        <PartnerLogo src={BPartners} alt="BPartners" />
        <PartnerLogo src={YF} alt="YIF" />
        <PartnerLogo src={Kante} alt="Kanteco" />
      </div>
    </div>
  </section>
);
