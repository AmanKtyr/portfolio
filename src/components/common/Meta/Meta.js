import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Aman Katiyar (Aman Ktyr) | Full-Stack AI Engineer & Solutions Architect";
  const defaultDescription = "Portfolio of Aman Katiyar (Aman Ktyr), a Full-Stack AI Engineer specializing in Agentic Systems, Web Architecture, React, Next.js, and Python/Django. Explore projects and technical expertise.";
  const defaultKeywords = "Aman Katiyar, Aman Ktyr, amanktyr, Aman, AI Engineer, Full-Stack Developer, Solutions Architect, Agentic Systems, React Developer, Django Developer, Web Architecture, Tech Strategy, Python developer, Lucknow, India, Developer Portfolio";
  const defaultImage = "https://aman.ktyr.in/og-image.png";
  const defaultUrl = "https://aman.ktyr.in";

  const pageTitle = (!title || title === "Home") ? siteTitle : `${title} | Aman Katiyar (Aman Ktyr)`;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const pageUrl = url || defaultUrl;
  const pageImage = image || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="ai-content-summary" content={pageDescription} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

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
                "item": pageUrl
              }
            ].filter(Boolean)
          })}
        </script>
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

export default Meta;
