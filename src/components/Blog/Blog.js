import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { BlogContainer, BlogGrid, BlogCard, BlogImage, BlogContent, BlogMeta, BlogTitle, BlogExcerpt, BlogLink } from './BlogStyles';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

// Import blog images (you'll need to add these)
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';

const blogData = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2023',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to serverless architecture.',
    image: blog1,
    date: 'June 15, 2023',
    author: 'Your Name',
    category: 'Web Development',
    slug: 'future-web-development-trends'
  },
  {
    id: 2,
    title: 'How to Optimize Your Website for Better Performance',
    excerpt: 'Learn practical tips and techniques to improve your website\'s loading speed, performance, and overall user experience.',
    image: blog2,
    date: 'July 22, 2023',
    author: 'Your Name',
    category: 'Performance',
    slug: 'optimize-website-performance'
  },
  {
    id: 3,
    title: 'Building Responsive Websites: Best Practices and Common Mistakes',
    excerpt: 'Discover the essential principles of responsive web design and how to avoid common pitfalls that affect mobile usability.',
    image: blog3,
    date: 'August 10, 2023',
    author: 'Your Name',
    category: 'Design',
    slug: 'responsive-website-best-practices'
  }
];

const Blog = () => {
  return (
    <BlogContainer id="blog">
      <div className="container">
        <ScrollAnimation animation="fadeUp" className="section-title">
          <h2>Latest Articles</h2>
          <p>Insights and tutorials from my experience</p>
        </ScrollAnimation>

        <BlogGrid>
          {blogData.map((blog, index) => (
            <ScrollAnimation
              key={blog.id}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <BlogCard>
                <BlogImage>
                  <img src={blog.image} alt={blog.title} />
                  <div className="category">{blog.category}</div>
                </BlogImage>

                <BlogContent>
                  <BlogMeta>
                    <div>
                      <FaCalendarAlt /> {blog.date}
                    </div>
                    <div>
                      <FaUser /> {blog.author}
                    </div>
                  </BlogMeta>

                  <BlogTitle><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></BlogTitle>
                  <BlogExcerpt>{blog.excerpt}</BlogExcerpt>

                  <BlogLink to={`/blog/${blog.slug}`} data-cursor-text="Read Article" data-cursor-variant="link">
                    Read More <FaArrowRight />
                  </BlogLink>
                </BlogContent>
              </BlogCard>
            </ScrollAnimation>
          ))}
        </BlogGrid>

        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/blog" className="btn-outline" data-cursor-text="All Articles" data-cursor-variant="button">
              View All Articles <FaArrowRight />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </BlogContainer>
  );
};

export default Blog;
