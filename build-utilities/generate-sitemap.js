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
    {
      url: "https://lowratehomeloan.com.au/buy-a-new-home",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/refinance-home-loan",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/buy-investment-property",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/compare-rates",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/areas-we-service",
      changefreq: "weekly",
    },
    // Explicitly adding all mortgage broker pages as individual static URLs
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-altona",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-berwick",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-burwood",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-caroline-springs",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-clyde",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-craigieburn",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-cranbourne",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-dandenong",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-fitzroy",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-footscray",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-glen-waverley",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-hampton-park",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-hoppers-crossing",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-keysborough",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-laverton",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-mitcham",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-mornington-peninsula",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-mount-waverley",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-pakenham",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-ringwood",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-rockbank",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-scoresby",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-south-yarra",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-springvale",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-tarneit",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-wheelers-hill",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-williams-landing",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-wyndham-vale",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-sydney-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-perth",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/rose-bay-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-brisbane",
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

  xml += `</urlset>`; // Fixing the closing tag here
  return xml;
}

// Call the function to generate the sitemap
generateSitemap();
