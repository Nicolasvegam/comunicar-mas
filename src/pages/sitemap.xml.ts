import { GetServerSideProps } from 'next';

function generateSiteMap() {
  const baseUrl = 'https://www.comunicarmas.cl';
  
  // Páginas estáticas principales
  const staticPages = [
    '',
  ];


  const allPages = [...staticPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
           xmlns:xhtml="http://www.w3.org/1999/xhtml"
           xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
           xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
     ${allPages
       .map((page) => {
         const url = `${baseUrl}${page}`;
         const priority = page === '' ? '1.0' : page.includes('/servicios/') ? '0.8' : '0.7';
         const changefreq = page === '' ? 'weekly' : 'monthly';
         
         return `
       <url>
           <loc>${url}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
           <mobile:mobile/>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // Esta página no renderiza nada, solo genera el XML
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generar el sitemap XML
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;