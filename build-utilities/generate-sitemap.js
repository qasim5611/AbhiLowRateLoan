const fs = require("fs");
const path = require("path");

function generateSitemap() {
  // Page Data
  const pages = [
    {
      url: "https://lowratehomeloan.com.au",
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "https://lowratehomeloan.com.au/about-us",
      changefreq: "weekly",
    },
  ];

  const sitemap = generateSitemapXml(pages);

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

function generateSitemapXml(pages) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach((page) => {
    xml += `
  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority || "0.5"}</priority>
  </url>
    `;
  });

  xml += `</urlset>`; // Proper closing tag
  return xml;
}

generateSitemap();
