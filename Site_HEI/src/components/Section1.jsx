import { useState } from 'react';
import heroBackground1 from '/src/assets/photo/integration.jpg';
import heroBackground2 from '/src/assets/photo/concours.jpg';
import heroBackground3 from '/src/assets/photo/hei_foot.jpg';

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      background: heroBackground1,
      text: "«L'éducation est l'arme la plus puissante pour changer le monde» selon Nelson Mandela. «L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar» selon HEI. C'est notre mission."
    },
    {
      background: heroBackground2,
      text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relache pour la montée en compétences de nos étudiants."
    },
    {
      background: heroBackground3,
      text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex items-center justify-center w-screen h-[85vh] relative overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slides[currentIndex].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-20 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition hover:cursor-pointer hover:bg-amber-200 active:bg-amber-200 hover:text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-20 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition hover:cursor-pointer hover:bg-amber-200 active:bg-amber-200 hover:text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div className="max-w-4xl m-auto relative z-10 px-4">
        <h1 className="text-6xl font-bold text-orange-500 text-center mb-20">
          Haute Ecole d'Informatique
        </h1>

        <div className="relative h-32 overflow-hidden mb-10">
          {slides.map((slide, index) => (
            <p 
              key={index}
              className={`text-lg text-center text-white absolute w-full transition-all duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 20}px)`
              }}
            >
              {slide.text}
            </p>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="font-bold border border-white bg-white px-6 py-3 rounded-xl hover:bg-blue-700 transition hover:cursor-pointer hover:border-blue-700">
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