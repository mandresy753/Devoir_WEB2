import cloudPhoto from "./../assets/photo/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png"
import iaPhoto from "./../assets/photo/Intelligence-artificielle_Plan-de-travail-1-150x150.png"
import codePhoto from "./../assets/photo/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png"

const DomainCard = ({ image, title, description, className = "md:col-span-2 max-w-sm mx-auto" }) => (
  <div className={`bg-white rounded-lg p-8 text-center shadow-sm ${className}`}>
    <img src={image} alt={title} className="w-30 h-30 mx-auto mb-6" />
    <h3 className="text-2xl font-bold text-[#d3aa58] mb-4">{title}</h3>
    <p className="text-lg leading-relaxed">{description}</p>
  </div>
);

export const Domains = () => (
  <section className="py-16 bg-[#f9f8f7]">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-serif text-[#424d71] text-center mb-8">
        Domaines
      </h2>
      <p className="text-center mb-12 max-w-4xl mx-auto">
        Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :
      </p>

      <div className="flex max-w-6xl mx-auto gap-3">
        <DomainCard
          image={cloudPhoto}
          title="Cloud et cybersécurité"
          description="Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS).
          Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. 
          Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité."
        />

        <DomainCard
          image={iaPhoto}
          title="Intelligence artificielle"
          description="Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures semi-autonomes vous fascinent ? 
          Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de l'intelligence artificielle lors de vos cours chez HEI."
        />

        <DomainCard
          image={codePhoto}
          title="Ingénierie logicielle"
          description="Apprenez les principes de la conception ou le développement de programmes et d'applications web et mobile et explorez le monde 
          fascinant des 'codes'. À la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des 
          particuliers ou des entreprises pour leurs besoins numériques."
        />
      </div>
    </div>
  </section>
);