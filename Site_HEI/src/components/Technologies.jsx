import Java from "./../assets/photo/Java-150x150.png";
import Python from "./../assets/photo/python-150x150.png";
import Js from "./../assets/photo/JS-150x150.png";
import C from "./../assets/photo/C-150x150.png";
import TypeScript from "./../assets/photo/TS-150x150.png";
import Docker from "./../assets/photo/docker-300x77.png";
import Next from "./../assets/photo/next.png";
import AWS from "./../assets/photo/aws.png";
import Serverless from "./../assets/photo/serverless.png";
import ReactLogo from "./../assets/photo/react.png";
import OpenAPI from "./../assets/photo/openapi.png";

const TechLogo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-30 h-30 object-contain mx-auto"
  />
);

export const Technologies = () => (
  <section className="py-16 bg-[#f9f8f7]">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-serif text-[#424d71] text-center mb-8">
        Les technos et langages utilisées
      </h2>
      <p className="text-center mb-12 max-w-4xl mx-auto text-lg">
        Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java et JavaScript. 
        Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, 
        offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-12">
        <TechLogo src={Java} alt="Java" />
        <TechLogo src={Python} alt="Python" />
        <TechLogo src={Js} alt="JavaScript" />
        <TechLogo src={C} alt="C" />
        <TechLogo src={TypeScript} alt="TypeScript" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
        <TechLogo src={Docker} alt="Docker" />
        <TechLogo src={Next} alt="Next.js" />
        <TechLogo src={AWS} alt="AWS" />
        <TechLogo src={Serverless} alt="Serverless" />
        <TechLogo src={ReactLogo} alt="React" />
        <TechLogo src={OpenAPI} alt="OpenAPI" />
      </div>
    </div>
  </section>
);
