function HeroSection() {
  return (
    <section className=" flex items-center justify-center w-screen h-[85vh]">
      <div className=" max-w-4xl m-auto">
        <h1 className="text-6xl font-bold text-blue-700 text-center mb-20">
          Haute Ecole d'Informatique
        </h1>
        <p className="text-lg text-center text-gray-700 mb-10 ">
          «L’éducation est l’arme la plus puissante pour changer le monde» selon Nelson Mandela. «L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar» selon HEI. C’est notre mission.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-30">
          <button className=" font-bold border border-blue-600 bg-white  px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Inscrivez-vous ici
          </button>
          <button className="font-bold border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition">
            Emploi du temps
          </button>
          <button className="font-bold border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition">
            Programme pédagogique
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;