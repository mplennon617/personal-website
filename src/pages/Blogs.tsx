import React, { useState } from 'react';
import { GraduationCap, Cpu, ArrowUpToLine } from 'lucide-react';

function Blogs() {
    const [visibleBlogs, setVisibleBlogs] = useState(4);
  
  // Sample blog data - in a real app this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "A Commentary on Introductory Classes",
      date: "January 28, 2024",
      category: "Education",
      type: "Opinion",
      content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "A Commentary on Introductory Classes",
      date: "January 28, 2024",
      category: "Education",
      type: "Opinion",
      content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "A Commentary on Introductory Classes",
      date: "January 28, 2024",
      category: "Education",
      type: "Opinion",
      content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "A Commentary on Introductory Classes",
      date: "January 28, 2024",
      category: "Education",
      type: "Opinion",
      content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Advanced React Patterns",
      date: "February 15, 2024",
      category: "Technology",
      type: "Tutorial",
      content: "Exploring advanced patterns in React development including compound components, render props, and custom hooks for better code organization.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "The Future of Web Development",
      date: "March 5, 2024",
      category: "Technology",
      type: "Opinion",
      content: "A look into emerging trends in web development and how they might shape the industry in the coming years.",
      image: "/api/placeholder/300/200"
    }
  ];

  const iconsMap: { [key: string]: () => React.ReactNode } = {
    "Education": () => <GraduationCap className="w-5 h-5 text-blue-400" />,
    "Technology": () => <Cpu className="w-5 h-5 text-green-400" />
  }

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => Math.min(prev + 2, blogPosts.length));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-gray-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Blogs</h1>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(0, visibleBlogs).map((post) => (
            <div key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              {/* Blog Header */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.type}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {iconsMap[post.category] && React.createElement(iconsMap[post.category])}
                </div>
              </div>

              {/* Blog Content */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {post.content}
                  </p>
                  
                  <button className="border border-gray-400 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                    Read More
                  </button>
                </div>
                
                {/* Blog Image Placeholder */}
                <div className="w-32 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Section */}
      <div className="flex justify-center items-center gap-4 mb-12">
        {visibleBlogs < blogPosts.length && (
          <button 
            onClick={loadMoreBlogs}
            className="border border-gray-400 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            Load More
          </button>
        )}
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <ArrowUpToLine className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
export default Blogs;