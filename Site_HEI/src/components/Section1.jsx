function HeroSection() {
  return (
    <section className=" flex items-center justify-center w-screen h-[85vh]">
      <div className=" max-w-4xl m-auto">
        <h1 className="text-6xl font-bold text-blue-700 text-center mb-20">
          Haute Ecole d'Informatique
        </h1>
        <p className="text-lg text-center text-white mb-10 ">
          «L’éducation est l’arme la plus puissante pour changer le monde» selon Nelson Mandela. «L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar» selon HEI. C’est notre mission.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-30">
          <button className="font-bold border border-blue-700 bg-white  px-6 py-3 rounded-xl hover:bg-blue-700 transition hover:cursor-pointer hover:border-blue-700">
            Inscrivez-vous ici
          </button>
          <button className="font-bold border border-amber-400 bg-amber-400 text-blue-600 px-6 py-3 rounded-xl hover:bg-amber-300 transition hover:cursor-pointer">
            Emploi du temps
          </button>
          <button className="font-bold border border-blue-600 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition hover:cursor-pointer">
            Programme pédagogique
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;