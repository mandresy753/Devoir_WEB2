export function Navbar() {
  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="flex justify-around items-center">
        <a className="text-5xl font-bold text-orange-400 pl-5 hover:cursor-pointer hover:text-orange-500">HEI</a>
        <ul className="flex space-x-7 text-2xl justify-center p-2 items-center">
          <li><a href="/" className="hover:text-orange-400 text-orange-400">Accueil</a></li>
          <li><a href="/about" className="hover:text-orange-400">Actualités</a></li>
          <li><a href="/about" className="hover:text-orange-400">Bourses d'Etudes</a></li>
          <li><a href="/about" className="hover:text-orange-400">Inscriptions</a></li>
          <li className="hover:cursor-pointer hover:text-black border-2 px-4 py-2 bg-yellow-500 border-none rounded-md">Intranet</li>
        </ul>
      </div>
    </nav>
  );
}