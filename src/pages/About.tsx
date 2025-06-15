import { Briefcase, CheckSquare, FileText, Globe, GraduationCap, Heart, Mail, MapPin } from 'lucide-react';
import { SiGithub, SiInstagram, SiLinkedin, SiMinutemailer, SiX } from "react-icons/si";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="text-gray-300">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-8">About Me</h1>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Fast Facts Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    Fast Facts
                </h2>
                
                <div className="space-y-6">
                    {/* Occupation */}
                    <div className="flex items-start gap-4">
                    <Briefcase className="w-6 h-6 mt-1 text-blue-400" />
                    <div>
                        <p><span>Occupation:</span> <span className="font-semibold">Software Engineer</span></p>
                        <p><span>At:</span> <span className="font-semibold">JPMorgan Chase</span></p>
                        <p><span>Based in:</span> <span className="font-semibold">Plano, TX</span></p>
                        <p><span>Since:</span> <span className="font-semibold">August 2023</span></p>
                    </div>
                    </div>

                    {/* Education */}
                    <div className="flex items-start gap-4">
                    <GraduationCap className="w-6 h-6 mt-1 text-green-400" />
                    <div>
                        <p><span>Graduated from:</span> <span className="font-semibold">Southern Methodist University (SMU)</span></p>
                        <p><span>In:</span> <span className="font-semibold">May 2023</span></p>
                        <p><span>With majors in:</span> <span className="font-semibold">Computer Science, Mathematics</span></p>
                    </div>
                    </div>

                    {/* Interests */}
                    <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 mt-1 text-red-400" />
                    <div>
                        <p><span>I love:</span> <span className="font-semibold">coding, drawing, reading</span></p>
                        <p><span>And:</span> <span className="font-semibold">pickleball, running, and gaming</span></p>
                    </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 mt-1 text-yellow-400" />
                    <div>
                        <p><span>I was a:</span> <span className="font-semibold"><a href="https://hacksmu.org/" className="text-blue-300 hover:text-purple-400 transition duration-300 underline" target="_blank">Hackathon director</a>, organizer, and participant</span></p>
                        <p><span>And an:</span> <span className="font-semibold">SMU Mustang Band member</span></p>
                        <p><span>And an:</span> <span className="font-semibold">Officer of Theta Tau (professional engineering fraternity)</span></p>
                    </div>
                    </div>

                    {/* Goals */}
                    <div className="flex items-start gap-4">
                    <CheckSquare className="w-6 h-6 mt-1 text-purple-400" />
                    <div>
                        <p><span>My goals:</span> <span className="font-semibold">To practice intentionality in work and life</span></p>
                        <p><span>And:</span> <span className="font-semibold">Creating over consuming</span></p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                {/* Socials Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    <h2 className="text-3xl font-bold mb-6">Socials</h2>
                    
                    {/* Social Icons */}
                    <div className="flex gap-4 mb-6 justify-center">
                    <div className="bg-white rounded-lg p-3 flex gap-3">
                        <a href="https://github.com/mplennon617" target="_blank"><SiGithub className="w-5 h-5 text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition-transform duration-300"></SiGithub></a>
                        <a href="https://www.linkedin.com/in/michael-p-lennon/" target="_blank"><SiLinkedin className="w-5 h-5 text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition-transform duration-300"></SiLinkedin></a>
                        <a href="https://medium.com/@mplennon617_5942" target="_blank"><span className="w-5 h-5 text-gray-800 hover:text-gray-600 font-bold text-sm flex items-center justify-center transform hover:-translate-y-1 transition-transform duration-300">M</span></a>
                        <a href="https://twitter.com/mplennon617" target="_blank"><SiX className="w-5 h-5 text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition-transform duration-300"></SiX></a>
                        {/* <a href="https://github.com/mplennon617" target="_blank"><SiFacebook className="w-5 h-5 text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition-transform duration-300"></SiFacebook></a> */}
                        <a href="https://www.instagram.com/mplennon617/" target="_blank"><SiInstagram className="w-5 h-5 text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition-transform duration-300"></SiInstagram></a>
                        <a href="mailto:contact@mplennon.com" target="_blank"><SiMinutemailer className="w-5 h-5 text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition-transform duration-300"></SiMinutemailer></a>
                    </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Plano, TX</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>contact@mplennon.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Globe className="w-4 h-4" />
                        <a href="https://mplennon.com" className="text-blue-400">https://mplennon.com</a>
                    </div>
                    </div>

                    <p className="text-xl font-semibold text-center mb-4">Let's Connect!</p>
                    
                    <div className="text-center">
                    <a href='mailto:contact@mplennon.com' target='_blank'>
                        <button className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium cursor-pointer">
                            Contact
                        </button>
                    </a>
                    </div>
                </div>

                {/* Coding Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    <h2 className="text-3xl font-bold mb-6">Coding</h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                    Coding is a great joy for me. With each problem I solve, I become more driven to make the most out of software engineering as a career path.
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                    Check out my coding portfolio below.
                    </p>
                    
                    <div className="text-center">
                    <Link to="/portfolio" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                        Portfolio
                    </Link>
                    </div>
                </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-center gap-6 max-sm:hidden">
                <Link to="/portfolio" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Portfolio
                </Link>
                <Link to="/blogs" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Blogs
                </Link>
                <Link to="/designs" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Designs
                </Link>
            </div>
        </div>
    );
}
export default About;