const AdmissionStep = ({ number, title, description, bgColor }) => (
  <div className={`flex-1 px-10 py-10 ${bgColor}`}>
    <div className="text-5xl font-bold text-white mb-2">{number}</div>
    <p className="font-bold mb-2">{title}</p>
    <p className="text-black">{description}</p>
  </div>
);

export const Admission = () => {
  return (
    <section className="bg-[#7491cb] flex flex-col items-center py-12">
      <h1 className="text-5xl font-bold text-white mt-8 mb-8 text-center">
        Admission
      </h1>

      <p className="text-white text-center max-w-2xl mb-4">
        Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
      </p>
      <p className="text-white text-center max-w-3xl mb-12">
        une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
      </p>

      <div className="flex w-full max-w-6xl mb-10">
        <AdmissionStep
          number="01"
          title="Dépôt de dossiers :"
          description="pour les bacheliers de toutes séries sans limite d'âge"
          bgColor="bg-[#f8deb0]"
        />

        <div className="flex items-center justify-center bg-[#f8deb0] px-2">
          <span className="text-white text-6xl">&#8594;</span>
        </div>

        <AdmissionStep
          number="02"
          title="Test de niveau"
          description=": composé d'une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D"
          bgColor="bg-[#f4d49b]"
        />

        <div className="flex items-center justify-center bg-[#f7c26c] px-2">
          <span className="text-white text-6xl">&#8594;</span>
        </div>

        <AdmissionStep
          number="03"
          title="Inscription définitive"
          description="(si test réussi)"
          bgColor="bg-[#f7c26c]"
        />
      </div>

      <div className="flex gap-6">
        <button className="bg-transparent border-2 border-white text-white font-bold text-xl px-8 py-3 rounded transition hover:bg-white hover:text-[#7491cb]">
          Inscrivez-vous ici
        </button>
        <button className="bg-[#19335b] text-white font-bold text-xl px-8 py-3 rounded transition hover:bg-[#25488c]">
          Résultat concours
        </button>
      </div>
    </section>
  );
};
