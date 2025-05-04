import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight, FaSearch, FaTags, FaFolder } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BlogPageContainer, BlogBanner, BlogBannerContent, BlogContent, BlogGrid, BlogCard, BlogImage, BlogCardContent, BlogMeta, BlogTitle, BlogExcerpt, BlogLink, BlogSidebar, SidebarWidget, SidebarTitle, SearchForm, SearchInput, SearchButton, CategoryList, CategoryItem, TagCloud, TagItem } from './BlogStyles';

// Import blog images (you'll need to add these)
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import blog4 from '../../assets/blog1.jpg'; // Replace with actual image
import blog5 from '../../assets/blog2.jpg'; // Replace with actual image
import blog6 from '../../assets/blog3.jpg'; // Replace with actual image

const blogData = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2023',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to serverless architecture.',
    image: blog1,
    date: 'June 15, 2023',
    author: 'Aman Katiyar',
    category: 'Web Development',
    tags: ['Web Development', 'Trends', 'Technology'],
    slug: 'future-web-development-trends'
  },
  {
    id: 2,
    title: 'How to Optimize Your Website for Better Performance',
    excerpt: 'Learn practical tips and techniques to improve your website\'s loading speed, performance, and overall user experience.',
    image: blog2,
    date: 'July 22, 2023',
    author: 'Aman Katiyar',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'Web Development'],
    slug: 'optimize-website-performance'
  },
  {
    id: 3,
    title: 'Building Responsive Websites: Best Practices and Common Mistakes',
    excerpt: 'Discover the essential principles of responsive web design and how to avoid common pitfalls that affect mobile usability.',
    image: blog3,
    date: 'August 10, 2023',
    author: 'Aman Katiyar',
    category: 'Design',
    tags: ['Responsive Design', 'Mobile', 'UI/UX'],
    slug: 'responsive-website-best-practices'
  },
  {
    id: 4,
    title: 'Introduction to Three.js: Creating 3D Experiences on the Web',
    excerpt: 'Learn the basics of Three.js and how to create immersive 3D experiences for your web projects.',
    image: blog4,
    date: 'September 5, 2023',
    author: 'Aman Katiyar',
    category: '3D Graphics',
    tags: ['Three.js', '3D', 'WebGL', 'JavaScript'],
    slug: 'introduction-to-threejs'
  },
  {
    id: 5,
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'Explore advanced CSS techniques like Grid, Flexbox, and CSS Variables that can transform your web development workflow.',
    image: blog5,
    date: 'October 12, 2023',
    author: 'Aman Katiyar',
    category: 'CSS',
    tags: ['CSS', 'Web Development', 'Design'],
    slug: 'modern-css-techniques'
  },
  {
    id: 6,
    title: 'Getting Started with React: A Beginner\'s Guide',
    excerpt: 'A comprehensive guide to help beginners understand React concepts and start building their first React application.',
    image: blog6,
    date: 'November 8, 2023',
    author: 'Aman Katiyar',
    category: 'React',
    tags: ['React', 'JavaScript', 'Frontend'],
    slug: 'getting-started-with-react'
  }
];

// Extract unique categories and tags
const categories = [...new Set(blogData.map(blog => blog.category))];
const allTags = blogData.flatMap(blog => blog.tags);
const uniqueTags = [...new Set(allTags)];

const BlogPage = () => {
  return (
    <>
      <Header />
      
      <BlogPageContainer>
        <BlogBanner>
          <div className="container">
            <BlogBannerContent>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Blog
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Insights, tutorials, and thoughts on web development
              </motion.p>
            </BlogBannerContent>
          </div>
        </BlogBanner>
        
        <div className="container">
          <BlogContent>
            <motion.div
              className="blog-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BlogGrid>
                {blogData.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BlogCard>
                      <BlogImage>
                        <img src={blog.image} alt={blog.title} />
                        <div className="category">{blog.category}</div>
                      </BlogImage>
                      
                      <BlogCardContent>
                        <BlogMeta>
                          <div>
                            <FaCalendarAlt /> {blog.date}
                          </div>
                          <div>
                            <FaUser /> {blog.author}
                          </div>
                        </BlogMeta>
                        
                        <BlogTitle>
                          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </BlogTitle>
                        
                        <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                        
                        <BlogLink to={`/blog/${blog.slug}`}>
                          Read More <FaArrowRight />
                        </BlogLink>
                      </BlogCardContent>
                    </BlogCard>
                  </motion.div>
                ))}
              </BlogGrid>
            </motion.div>
            
            <motion.div
              className="blog-sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BlogSidebar>
                <SidebarWidget>
                  <SidebarTitle>Search</SidebarTitle>
                  <SearchForm>
                    <SearchInput type="text" placeholder="Search..." />
                    <SearchButton type="submit">
                      <FaSearch />
                    </SearchButton>
                  </SearchForm>
                </SidebarWidget>
                
                <SidebarWidget>
                  <SidebarTitle>Categories</SidebarTitle>
                  <CategoryList>
                    {categories.map((category, index) => (
                      <CategoryItem key={index}>
                        <Link to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                          <FaFolder /> {category}
                          <span>{blogData.filter(blog => blog.category === category).length}</span>
                        </Link>
                      </CategoryItem>
                    ))}
                  </CategoryList>
                </SidebarWidget>
                
                <SidebarWidget>
                  <SidebarTitle>Tags</SidebarTitle>
                  <TagCloud>
                    {uniqueTags.map((tag, index) => (
                      <TagItem key={index}>
                        <Link to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                          <FaTags /> {tag}
                        </Link>
                      </TagItem>
                    ))}
                  </TagCloud>
                </SidebarWidget>
                
                <SidebarWidget>
                  <SidebarTitle>Recent Posts</SidebarTitle>
                  <div className="recent-posts">
                    {blogData.slice(0, 3).map((blog, index) => (
                      <div className="recent-post" key={index}>
                        <Link to={`/blog/${blog.slug}`}>
                          <img src={blog.image} alt={blog.title} />
                          <div>
                            <h4>{blog.title}</h4>
                            <span>{blog.date}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </SidebarWidget>
              </BlogSidebar>
            </motion.div>
          </BlogContent>
        </div>
      </BlogPageContainer>
      
      <Footer />
    </>
  );
};

export default BlogPage;
