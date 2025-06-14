import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
                    {/* Left Content */}
                    <div className="text-gray-300 space-y-8">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-light mb-6">
                                Hi, I'm <span className="font-bold text-gray-200">Michael Lennon</span>.
                            </h1>
                            
                            <p className="text-lg leading-relaxed max-w-lg">                    
                                I'm a 
                                <span className="bg-gradient-to-br bg-clip-text font-bold text-transparent from-purple-300 to-blue-300">software engineer</span> 
                                dedicated to transforming the world through innovative, practical, and responsible solutions. Like many of my other passions, I treat software development as an 
                                <b className="bg-gradient-to-br bg-clip-text font-bold text-transparent from-purple-300 to-blue-300">art form</b>
                                 - a tool to push the boundaries of what's possible.
                            </p>
                            <p className="text-lg leading-relaxed max-w-lg pt-4 front">It's great to meet you.</p>

                        </div>
                        
                        <Link to='about' className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                        About Me
                        </Link>
                    </div>

                    {/* Right Content - Placeholder for image/content */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-80 h-96 bg-gray-100 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        {/* Placeholder for profile image or other content */}
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-gray-600 text-center">
                                    {/* <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                                    <p className="text-sm">Profile Image</p> */}
                                    <img src="/images/avatar2025-1.png" alt="Profile" className="w-64 h-64 rounded-full mx-auto mb-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
        </>
    );
}
export default Home;