module.exports = {
    siteUrl: 'https://loc-all.vercel.app',
    generateRobotsTxt: true, // Optional
    exclude: [
       // 🚫 Exclude duplicate or unwanted paths

    '/server-sitemap.xml',  // Default exclusion for API routes
    '/404',                 // Exclude error pages
    '/admin',               // Exclude admin panels
    '/private/*',           // Exclude all private routes
    ], // Pages to exclude
  };
