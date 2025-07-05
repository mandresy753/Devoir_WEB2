import imgStudent from "./../assets/photo/A-propos-left-1.webp";
import { FaGraduationCap } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa";
import { FaMedal } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl mx-auto ">
    <div className="flex flex-col md:flex-row items-center justify-between gap-18">
      {/* Colonne image */}
      <div className="flex justify-center md:w-1/2">
        <img src={imgStudent} alt="Étudiant" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Colonne texte */}
      <div className="space-y-6 md:w-1/2">
       <h1 className="text-5xl font-bold text-blue-900 mb-10">À propos de nous</h1>

        <div className="flex flex-col space-y-2">
  <div className="flex items-center space-x-3">
    <FaGraduationCap className="text-yellow-500 text-6xl" />
    <h3 className="text-2xl font-semibold text-blue-900">+3 ans</h3>
  </div>
  <p className="text-gray-700 text-lg mb-[30px]">
    Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique.
    Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.
  </p>
</div>

        <div className="flex flex-col space-y-3">
  
  <div className="flex items-center space-x-3">
    <FaUsers className="text-yellow-500 text-6xl" />
    <h3 className="text-2xl font-semibold text-blue-900">+250 étudiants</h3>
  </div>
  <p className="text-gray-700 text-lg mb-[30px]">
    Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre
    formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler
    de la “grande famille HEI”.
  </p>
</div>

        <div className="flex flex-col space-y-3">

  <div className="flex items-center space-x-3">
    <FaMedal className="text-yellow-500 text-6xl" />
    <h3 className="text-2xl font-semibold text-blue-900">Notre mission</h3>
  </div>

  <p className="text-gray-700 text-lg mb-[30px]">
    Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, 
    la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
  </p>
</div>

      </div>
    </div>
  </div>
    </section>
  );
};

export default AboutUs;

