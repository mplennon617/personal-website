import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

function Portfolio() {
    const projects = [
    {
      id: 1,
      title: "HackSMU Website",
      date: "Spring 2022",
      tech: "Next.js",
      description: "I designed the UI for the HackSMU IV website. Built on top of HackPortal.",
      gitUrl: "https://github.com/hacksmu/hacksmu_portal",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      imgPath: "/images/hacksmuiv-robotcrew.svg"
    },
    {
      id: 2,
      title: "Sendacard",
      date: "Spring 2022",
      tech: "Vue.js",
      description: "A tool to customize and distribute your very own Valentine's day cards.",
      gitUrl: "https://github.com/n-wes/sendacard",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      imgPath: "/images/valentines-card.png"
    },
    {
      id: 3,
      title: "Ticket to Ride Replica",
      date: "Spring 2019",
      tech: "Java",
      description: "A complete and working replica of the Ticket to Ride Board Game.",
      gitUrl: "https://github.com/mplennon617/TicketToRide",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      imgPath: "/images/train-stock.png"
    },
    {
      id: 4,
      title: "RapidRX",
      date: "Spring 2021",
      tech: "React/Node.js",
      description: "A platform to connect pharmacy customers to their prescriptions.",
      gitUrl: "https://github.com/ConnerOzenne/Rapid-Rx",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      imgPath: "/images/rx.png"
    },
  ];

  const skills = [
    "Java", "C++", "Python", "HTML/CSS/JS",
    "Spring", "React", "Next.js", "Flask", "SQL", "Docker", "Node.js", "AWS", "Terraform",
    "Git", "Linux", "Jupyter Notebook", "JIRA", "Agile Development", "Figma", "Inkscape"
  ];

  const awards = [
    {
      title: "AWS Certified Cloud Practitioner",
      date: "November 2023"
    },
    {
      title: "SMU Computer Science Departmental Award",
      date: "May 2023"
    },
    {
      title: "HackUNT 2022 Statefarm Challenge 3rd place",
      date: "February 2022"
    }
  ];

  return (
    <div className="text-gray-300">

      <div className="max-w-7xl mx-auto px-8">
        {/* Coding Projects Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-center mb-12">Coding Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <span>{project.date}</span>
                    <span>•</span>
                    <span>{project.tech}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {project.icon}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <a href={project.gitUrl} target="_blank" className="border border-gray-400 text-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium mr-4 mb-2 lg:mb-0 cursor-pointer">
                        View Code
                    </a>
                    {/* <button className="border border-gray-400 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                      Learn More
                    </button> */}
                  </div>
                  
                  {/* Project Image Placeholder */}
                  <img src={project.imgPath} className='w-32 h-24 rounded-lg flex-shrink-0 object-cover'></img>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Skills Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              {skills.slice(0, 4).map((skill, index) => (
                <span key={index} className="text-gray-300">
                  {skill}
                  {index < 3 && <span className="mx-2">•</span>}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {skills.slice(4, 13).map((skill, index) => (
                <span key={index} className="text-gray-300">
                  {skill}
                  {index < 8 && <span className="mx-2">•</span>}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {skills.slice(13).map((skill, index) => (
                <span key={index} className="text-gray-300">
                  {skill}
                  {index < skills.slice(13).length - 1 && <span className="mx-2">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Awards and Certifications Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Awards and Certifications</h2>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2 text-gray-300">
              {awards.map((award, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></span>
                  <span className="font-medium">{award.title}</span>
                  <span className="mx-2">•</span>
                  <span>{award.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-600 mb-16"></div>

        {/* Personal Statement */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I pride myself on being more than just a programmer. Technical writing, digital art, graphic design, and 
            education are just a few of my other passions.
          </p>
          
          <p className="text-lg text-gray-300 mb-8">
            Check out my other work!
          </p>
          
          <div className="flex justify-center gap-6">
            <Link to="/blogs" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
              Blogs
            </Link>
            <Link to="/designs" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
              Designs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;