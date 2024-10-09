const fs = require("fs");
// const path = require("path");

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

    {
      url: "https://lowratehomeloan.com.au/artarmon-mortgage-brokers",
      changefreq: "weekly",
    },

    {
      url: "https://lowratehomeloan.com.au/ashcroft-mortgage-brokers",
      changefreq: "weekly",
    },

    {
      url: "https://lowratehomeloan.com.au/bellevue-hill-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/blog",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/bondi-beach-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/bondi-junction-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/buy-home-consultation",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/castle-cove-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/chatswood-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/clovelly-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/compliments-and-concerns",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/contact",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/coogee-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/crows-nest-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/darling-point-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/disclaimer",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/double-bay-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/dover-heights-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/faqs",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/Forgotpass",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/gift-card-terms-condition",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/Home",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/home-loans",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/hornsby-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/kirribilli-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/lane-cove-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/Lansvale, NSW",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/login",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-abbotsbury",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-adelaide",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-casula-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-gold-coast",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-hoxton-park-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-keysborough",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-lansvale-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-liverpool-nsw-2170",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-lurnea-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-lurnea-nswDupl",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-middleton-grange",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-broker-moorebank",
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
      url: "https://lowratehomeloan.com.au/mortgage-broker-werribee",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-brokers-cabramatta",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-brokers-in-parramatta-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-brokers-in-ryde-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-brokers-in-ryde-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-brokers-in-sutherland-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-brokers-len-waters-estate-nsw",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mortgage-repayment-calculator",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/mosman-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/north-sydney-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/not-found",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/paddington-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/point-piper-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/point-piper-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/privacy-policy",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/randwick-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/refinance-consultation",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/ResetPass",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/signup",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/st-ives-mortgage-brokers-nsw-2075",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/thank-you",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/turramurra-mortgage-brokers",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/VerifyTockenMail",
      changefreq: "weekly",
    },
    {
      url: "https://lowratehomeloan.com.au/waitara-mortgage-brokers",
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
