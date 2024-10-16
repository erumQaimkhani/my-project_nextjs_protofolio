import Link from 'next/link';

export default function Header() {
  return ( 
    <header className="bg-pink-300 text-black p-4  hover:text-green-200">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">My Portfolio</h1>
        <div>
          <Link href="#about" className="p-4 hover:text-gray-400">About</Link>
          <Link href="#projects" className="p-4 hover:text-gray-400">Projects</Link>
          <Link href="#contact" className="p-4 hover:text-gray-400">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
