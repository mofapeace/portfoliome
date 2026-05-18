import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import './Blog.css';

const Blog = ({ setView }) => {
  const [activePostId, setActivePostId] = useState(null);

  // Scroll to the top whenever we swap between listing and article view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePostId]);

  return (
    <div className="blog-container fade-in">
      {activePostId ? (
        <BlogPost 
          postId={activePostId} 
          onBack={() => setActivePostId(null)} 
        />
      ) : (
        <BlogList 
          onSelectPost={setActivePostId} 
          setView={setView}
        />
      )}
    </div>
  );
};

export default Blog;
