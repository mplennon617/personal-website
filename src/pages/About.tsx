import { Briefcase, CheckSquare, FileText, Globe, GraduationCap, Heart, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiMinutemailer, SiX } from "react-icons/si";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="text-gray-300">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-8">About Me</h1>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                        <p><span className="font-semibold">Occupation:</span> Software Engineer</p>
                        <p><span className="font-semibold">At:</span> JPMorgan Chase</p>
                        <p><span className="font-semibold">Based in:</span> Plano, TX</p>
                        <p><span className="font-semibold">Since:</span> August 2023</p>
                    </div>
                    </div>

                    {/* Education */}
                    <div className="flex items-start gap-4">
                    <GraduationCap className="w-6 h-6 mt-1 text-green-400" />
                    <div>
                        <p><span className="font-semibold">Graduated from:</span> Southern Methodist University (SMU)</p>
                        <p><span className="font-semibold">In:</span> May 2023</p>
                        <p><span className="font-semibold">With majors in:</span> Computer Science, Mathematics</p>
                    </div>
                    </div>

                    {/* Interests */}
                    <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 mt-1 text-red-400" />
                    <div>
                        <p><span className="font-semibold">I love:</span> coding, drawing, reading</p>
                        <p><span className="font-semibold">And:</span> pickleball, running, and gaming</p>
                    </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 mt-1 text-yellow-400" />
                    <div>
                        <p><span className="font-semibold">I was a:</span> Hackathon director, organizer, and participant</p>
                        <p><span className="font-semibold">And a:</span> SMU Mustang Band member</p>
                        <p><span className="font-semibold">And an:</span> Officer of Theta Tau (professional engineering fraternity)</p>
                    </div>
                    </div>

                    {/* Goals */}
                    <div className="flex items-start gap-4">
                    <CheckSquare className="w-6 h-6 mt-1 text-purple-400" />
                    <div>
                        <p><span className="font-semibold">My goals:</span> Spirituality, career success</p>
                        <p><span className="font-semibold">And:</span> being a creator, not a consumer</p>
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
                        <SiX className="w-5 h-5 text-gray-800 hover:text-gray-600" />
                        <SiFacebook className="w-5 h-5 text-gray-800" />
                        <SiInstagram className="w-5 h-5 text-gray-800" />
                        <span className="w-5 h-5 text-gray-800 font-bold text-sm flex items-center justify-center">M</span>
                        <SiGithub className="w-5 h-5 text-gray-800" />
                        <SiLinkedin className="w-5 h-5 text-gray-800" />
                        <SiMinutemailer className="w-5 h-5 text-gray-800" />
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
                        <span>[Email under construction]</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Globe className="w-4 h-4" />
                        <a href="https://mplennon.com" className="text-blue-400">https://mplennon.com</a>
                    </div>
                    </div>

                    <p className="text-xl font-semibold text-center mb-4">Let's Connect!</p>
                    
                    <div className="text-center">
                    <button className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                        Contact
                    </button>
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
            <div className="flex justify-center gap-6">
                <Link to="/blogs" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Blogs
                </Link>
                <Link to="/portfolio" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Portfolio
                </Link>
                <Link to="/designs" className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                Designs
                </Link>
            </div>
        </div>
    );
}
export default About;