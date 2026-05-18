import React, { useState } from 'react';
import { blogPosts } from '../../data/blogPosts';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogList = ({ onSelectPost, setView }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'Pentesting', 'Linux & Configs'];

  // Filter posts based on category and search query safely
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-list-container">
      {/* Blog Header */}
      <div className="blog-header-section">
        <h1 className="blog-main-title">Technical Publication Lab</h1>
        <p className="blog-subtitle">
          Documenting security audits, pentesting investigations, and secure frontend system designs.
        </p>
      </div>

      {/* Search & Category Filter bar */}
      <div className="blog-filters-bar">
        {/* Category Tabs */}
        <div className="blog-categories">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Widget */}
        <div className="blog-search-widget">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search articles, tags, concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="Search articles"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="blog-card"
              onClick={() => onSelectPost(post.id)}
            >
              <div className="blog-card-header">
                <span className="blog-card-category">{post.category}</span>
                <span className="blog-card-readtime">
                  <Clock size={12} className="meta-icon" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-description">{post.description}</p>

              {/* Tags */}
              <div className="blog-card-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-card-tag">#{tag}</span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="blog-card-footer">
                <span className="blog-card-date">
                  <Calendar size={12} className="meta-icon" />
                  {post.date}
                </span>
                <span className="read-more-btn">
                  Read Article <ArrowRight size={14} className="arrow-icon" />
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="blog-empty-state">
          <p>No publications found matching current filters.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="reset-filters-btn"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
