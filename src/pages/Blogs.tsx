// import React, { useState } from 'react';
// import { GraduationCap, Cpu, ArrowUpToLine } from 'lucide-react';

function Blogs() {
    // const [visibleBlogs, setVisibleBlogs] = useState(4);
  
  // Sample blog data - in a real app this would come from an API
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "A Commentary on Introductory Classes",
  //     date: "January 28, 2024",
  //     category: "Education",
  //     type: "Opinion",
  //     content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
  //     image: "/api/placeholder/300/200"
  //   },
  //   {
  //     id: 2,
  //     title: "A Commentary on Introductory Classes",
  //     date: "January 28, 2024",
  //     category: "Education",
  //     type: "Opinion",
  //     content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
  //     image: "/api/placeholder/300/200"
  //   },
  //   {
  //     id: 3,
  //     title: "A Commentary on Introductory Classes",
  //     date: "January 28, 2024",
  //     category: "Education",
  //     type: "Opinion",
  //     content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
  //     image: "/api/placeholder/300/200"
  //   },
  //   {
  //     id: 4,
  //     title: "A Commentary on Introductory Classes",
  //     date: "January 28, 2024",
  //     category: "Education",
  //     type: "Opinion",
  //     content: "In large-enrollment classes, managing the queue of students waiting for office hours help can be a struggle for the TAs, especially for virtual office hours.",
  //     image: "/api/placeholder/300/200"
  //   },
  //   {
  //     id: 5,
  //     title: "Advanced React Patterns",
  //     date: "February 15, 2024",
  //     category: "Technology",
  //     type: "Tutorial",
  //     content: "Exploring advanced patterns in React development including compound components, render props, and custom hooks for better code organization.",
  //     image: "/api/placeholder/300/200"
  //   },
  //   {
  //     id: 6,
  //     title: "The Future of Web Development",
  //     date: "March 5, 2024",
  //     category: "Technology",
  //     type: "Opinion",
  //     content: "A look into emerging trends in web development and how they might shape the industry in the coming years.",
  //     image: "/api/placeholder/300/200"
  //   }
  // ];

  // const iconsMap: { [key: string]: () => React.ReactNode } = {
  //   "Education": () => <GraduationCap className="w-5 h-5 text-blue-400" />,
  //   "Technology": () => <Cpu className="w-5 h-5 text-green-400" />
  // }

  // const loadMoreBlogs = () => {
  //   setVisibleBlogs(prev => Math.min(prev + 2, blogPosts.length));
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <div className="text-gray-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Blogs</h1>
      </div>

      {/* Blog Grid */}
      <p className='text-center font-semibold pb-5'>Blog posts on the way - check back soon!</p>

      {/* Load More Section */}
    </div>
  );
}
export default Blogs;