import React, { useState, useEffect } from 'react';
import { blogPosts } from '../../data/blogPosts';
import { ArrowLeft, Calendar, Clock, MessageSquare, Linkedin, Github, ShieldAlert, Info } from 'lucide-react';

const BlogPost = ({ postId, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = blogPosts.find(p => p.id === postId);

  // Track page scroll percentage for reading bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="blog-error-state">
        <p>Article not found.</p>
        <button onClick={onBack} className="back-btn"><ArrowLeft size={16} /> Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="blog-post-view">
      {/* READING PROGRESS BAR */}
      <div 
        className="reading-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* BACK NAVIGATION */}
      <div className="post-navigation">
        <button onClick={onBack} className="post-back-btn">
          <ArrowLeft size={16} /> Back to Technical Dashboard
        </button>
      </div>

      {/* POST TITLE AND METADATA */}
      <header className="post-header">
        <div className="post-meta-top">
          <span className="post-category">{post.category}</span>
          <span className="post-readtime">
            <Clock size={14} className="meta-icon" />
            {post.readTime}
          </span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta-bottom">
          <span className="post-date">
            <Calendar size={14} className="meta-icon" />
            Published: {post.date}
          </span>
        </div>
        
        {/* Post Tags */}
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="post-tag">#{tag}</span>
          ))}
        </div>
      </header>

      {/* POST BODY CONTENT */}
      <main className="post-body">
        {post.content.map((chunk, index) => {
          switch (chunk.type) {
            case 'paragraph':
              return <p key={index} className="post-paragraph">{chunk.text}</p>;
            
            case 'heading':
              return <h3 key={index} className="post-heading">{chunk.text}</h3>;
            
            case 'code':
              return (
                <div key={index} className="post-code-block">
                  <div className="code-header">
                    <div className="code-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="code-language">{chunk.language}</span>
                  </div>
                  <pre>
                    <code>{chunk.code}</code>
                  </pre>
                </div>
              );

            case 'warning':
              return (
                <div key={index} className="post-callout warning">
                  <div className="callout-header">
                    <ShieldAlert size={18} className="callout-icon" />
                    <h4>{chunk.title}</h4>
                  </div>
                  <p>{chunk.text}</p>
                </div>
              );

            case 'info':
              return (
                <div key={index} className="post-callout info">
                  <div className="callout-header">
                    <Info size={18} className="callout-icon" />
                    <h4>{chunk.title}</h4>
                  </div>
                  <p style={{ whiteSpace: 'pre-line' }}>{chunk.text}</p>
                </div>
              );

            default:
              return null;
          }
        })}
      </main>

      {/* SECURE SOCIAL DISCUSSION PANEL */}
      <section className="post-discussion-panel">
        <div className="discussion-icon-wrapper">
          <MessageSquare className="discussion-icon" size={28} />
        </div>
        <div className="discussion-content">
          <h3>Join the Technical Discussion</h3>
          <p>
            Have thoughts, counter-theories, or secure-coding feedback on this analysis? 
            Let's start a safe peer discussion directly on my social streams—helping build secure networking environments together.
          </p>
          <div className="discussion-links">
            <a 
              href="https://www.linkedin.com/in/mofa-godlove-tanyi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="discussion-btn linkedin-btn"
            >
              <Linkedin size={16} /> Discuss on LinkedIn
            </a>
            <a 
              href="https://github.com/mofapeace" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="discussion-btn github-btn"
            >
              <Github size={16} /> Follow on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
