/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://keithdiaz.vercel.app',  // Your website URL
    generateRobotsTxt: true,                  // (Optional) Generates robots.txt
    changefreq: 'weekly',                     // Default change frequency for your site
    priority: 1.0,                            // Default priority for all pages
    sitemapSize: 5000,                        // Limit for sitemap size
    exclude: ['/404'],                        // Exclude pages if necessary
    outDir: './public',                       // The output directory where the sitemap is saved
  };