import Dre from "./../assets/photo/Tahina-OK-e1716502943928-150x150.png";
import Lou from "./../assets/photo/97-portraits-97_edited-e1716502895676-150x150.jpg";
import Mirado from "./../assets/photo/Mirado-150x150.webp";

const TeamMember = ({ name, title, image }) => (
  <div className="bg-amber-50 text-center max-w-xs h-90 rounded-3xl">
    <img src={image} alt={name} className="rounded-full mx-auto my-10 w-35 h-35 object-cover border-10 border-b-gray-400" />
    <h2 className="font-semibold text-lg">{name}</h2>
    <p className="text-sm text-gray-600">{title}</p>
  </div>
);

export const Team = () => {
  return (
    <div className="bg-blue-400  py-10 w-screen">
      <h1 className="text-5xl font-bold text-center mb-6 text-white">L’équipe pédagogique</h1>
      <p className="text-lg text-center text-white mb-8 w-2/3 m-auto">
        Notre équipe pédagogique se compose d’experts nationaux et internationaux en informatique,
         de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l
         ’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de 
         l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
      </p>
      <div className="flex justify-center gap-6">
        <TeamMember
          name="Dré Iahina Rafitera"
          title="Docteur-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017)"
          image={Dre}
        />
        <TeamMember
          name="Dr Lou Maurica"
          title="Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI"
          image={Lou}
        />
        <TeamMember
          name="Rafenomihintsôa Mirado"
          title="Data and Business Intelligence Specialist 5+ | Contact CI"
          image={Mirado}
        />
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-yellow-400 text-2xl">🌟</span>
      </div>
    </div>
  );
};
