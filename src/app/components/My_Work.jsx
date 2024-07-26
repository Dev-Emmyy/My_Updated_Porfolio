import Image from 'next/image';
import Link from 'next/link';

const My_Work = () => {
  const allProjects = [
    {
      image: "/work/movieflix.jpg",
      title: "Movie Web App",
      link: "https://movie-flix-master.vercel.app/"
    },
    {
      image: "/work/superhero.jpg",
      title: "Superhero App",
      link: "https://superhero-app-link.com"
    },
    {
      image: "/work/photo_gallery.jpg",
      title: "Photo Gallery",
      link: "https://photo-gallery-link.com"
    },
    {
      image: "/work/game.jpg",
      title: "Game Info Web App",
      link: "https://gaming-world-two.vercel.app/"
    },
    {
      image: "/work/facts.jpg",
      title: "Facts Web App",
      link: "https://random-fact-generator-jade.vercel.app/"
    },
    {
      image: "/work/country.jpg",
      title: "Country Info Web",
      link: "https://country-app-theme-switcher.vercel.app/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className='text-4xl font-bold mb-10 text-white text-center font-mono'>My<span className='font-sans'>Work</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-3xl border-4 sm:border-8 border-gray-600 cursor-pointer">
            <Image 
              src={project.image} 
              width={350} 
              height={350} 
              alt={project.title} 
              className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Work;