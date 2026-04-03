import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Aman Katiyar | Full-Stack AI Engineer & Solutions Architect";
  const defaultDescription = "Portfolio of Aman Katiyar, a Full-Stack AI Engineer specializing in Agentic Systems, Web Architecture, and Tech Strategy. Explore my projects and expertise in building scalable, intelligent solutions.";
  const defaultKeywords = "Aman Katiyar, Aman Ktyr, Aman, Kariyar, AI Engineer, Full-Stack Developer, Solutions Architect, Agentic Systems, React Developer, Web Architecture, Tech Strategy, Python developer, India, Developer Portfolio";
  const defaultImage = "https://aman.ktyr.in/og-image.png"; // Replace with your actual domain when ready
  const defaultUrl = "https://aman.ktyr.in";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title ? `${title} | Aman Katiyar` : siteTitle}</title>
      <meta name="title" content={title ? `${title} | Aman Katiyar` : siteTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="ai-content-summary" content={description || defaultDescription} />


      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:title" content={title ? `${title} | Aman Katiyar` : siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || defaultUrl} />
      <meta property="twitter:title" content={title ? `${title} | Aman Katiyar` : siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Breadcrumb Schema */}
      {url && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aman.ktyr.in"
              },
              title && title !== "Home" && {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": url
              }
            ].filter(Boolean)
          })}
        </script>
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={url || defaultUrl} />
    </Helmet>
  );
};


export default Meta;
