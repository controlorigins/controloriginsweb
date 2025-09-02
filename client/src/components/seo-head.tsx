import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({ 
  title = "Control Origins - Expert Business Technology Solutions | Microsoft Azure & ASP.NET Consulting",
  description = "Control Origins delivers cutting-edge business technology solutions specializing in Microsoft Azure, ASP.NET development, regulatory compliance (SOX, HIPAA, PCI), and strategic transformation consulting for enterprise organizations.",
  keywords = "Microsoft Azure consulting, ASP.NET development, business technology solutions, regulatory compliance, SOX compliance, HIPAA compliance, PCI compliance, strategic transformation, enterprise consulting, cloud solutions, application development",
  image = "https://controlorigins.com/logo.png",
  url = "https://controlorigins.com/",
  type = "website"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Add structured data for current page
    const structuredDataScript = document.getElementById('page-structured-data');
    if (structuredDataScript) {
      structuredDataScript.remove();
    }
    
    const newStructuredData = document.createElement('script');
    newStructuredData.id = 'page-structured-data';
    newStructuredData.type = 'application/ld+json';
    newStructuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Control Origins",
        "url": "https://controlorigins.com"
      },
      "about": {
        "@type": "Organization",
        "name": "Control Origins",
        "description": "Expert business technology solutions specializing in Microsoft Azure, ASP.NET development, and regulatory compliance consulting."
      }
    });
    
    document.head.appendChild(newStructuredData);
    
  }, [title, description, keywords, image, url, type]);
  
  return null;
}