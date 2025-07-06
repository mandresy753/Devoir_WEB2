import Student from "./../assets/photo/IMG-03-e1720537524581-1024x950-1.webp";

const ProgramPartCard = ({ percent, label }) => (
  <div className="bg-[#fce7d1] rounded-2xl p-6 text-center">
    <div className="text-5xl font-bold text-[#d3aa58] mb-2">{percent}</div>
    <p className="text-[#424d71] font-semibold text-2xl">{label}</p>
  </div>
);

export const Program = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <img src={Student} alt="Students studying" className="w-full rounded-lg" />
        </div>
        <div>
          <h2 className="text-4xl font-serif text-[#424d71] mb-6">
            Le programme pédagogique
          </h2>
          <p className="mb-8 leading-relaxed">
            Suivant le système LMD, jusqu'au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>
          <button className="border-2 border-[#424d71] text-[#424d71] px-8 py-3 rounded font-semibold hover:bg-[#424d71] hover:text-white transition-colors">
            Notre Programme
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
        <ProgramPartCard percent="25%" label="Apprentissage théoriques en présentiel" />
        <ProgramPartCard percent="25%" label="Apprentissage sur supports numériques" />
        <ProgramPartCard percent="25%" label="Travaux individuels de l'étudiant" />
        <ProgramPartCard percent="25%" label="Apprentissage en entreprise" />
      </div>
    </div>
  </section>
);
