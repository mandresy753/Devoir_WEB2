import logoHEI from './../assets/photo/cropped-Logo-e1662790239183.png'

export const Footer = () => (
  <footer className="bg-[#424d71] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <img src= {logoHEI} alt="HEI Logo" className="h-18 mb-4" />
          <p className="text-lg mb-4">
            Formation habilitée par l'État suivant le système LMD
          </p>
          <p className="text-lg">
            Habilitation MESupRes n°31309/2023
          </p>
        </div>
        <div>
          <h4 className=" font-semibold mb-4 text-2xl">Adresse</h4>
          <p className="text-lg">
            II J 161 R Ambodivoanjo<br />
            Ivandry Antananarivo<br />
            101, Madagascar
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-2xl">Navigation</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-[#d3aa58] transition-colors text-lg">Accueil</a></li>
            <li><a href="#" className="hover:text-[#d3aa58] transition-colors text-lg" >Actualités</a></li>
            <li><a href="#" className="hover:text-[#d3aa58] transition-colors text-lg">Bourse d'études</a></li>
            <li><a href="#" className="hover:text-[#d3aa58] transition-colors text-lg">Inscription</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-2xl">Médias sociaux</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#d3aa58] p-2 rounded-full hover:bg-yellow-400 transition-colors">
              <svg className="w-5 h-5 text-[#424d71]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="bg-[#d3aa58] p-2 rounded-full hover:bg-yellow-400 transition-colors">
              <svg className="w-5 h-5 text-[#424d71]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="bg-[#d3aa58] p-2 rounded-full hover:bg-yellow-400 transition-colors">
              <svg className="w-5 h-5 text-[#424d71]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.037 0 .631-.401 1.576-.608 2.451-.173.731.366 1.327 1.084 1.327 1.301 0 2.301-1.375 2.301-3.355 0-1.756-1.262-2.984-3.064-2.984-2.088 0-3.314 1.565-3.314 3.181 0 .631.242 1.305.544 1.668.059.072.068.135.05.209-.055.227-.177.719-.201.82-.031.129-.101.157-.234.095-1.3-.605-2.111-2.506-2.111-4.026 0-3.273 2.378-6.279 6.849-6.279 3.595 0 6.392 2.563 6.392 5.993 0 3.578-2.256 6.456-5.391 6.456-1.052 0-2.044-.547-2.384-1.271 0 0-.521 1.991-.649 2.479-.235.902-.869 2.031-1.294 2.718.976.301 2.006.463 3.07.463 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#5a6389] mt-8 pt-8 text-center text-sm">
        <p>© HEI Madagascar</p>
      </div>
    </div>
  </footer>
)