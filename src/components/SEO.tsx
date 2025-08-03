import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Comunicar Más - Espacio de Terapias Infantiles en Santiago | Fonoaudiología, Terapia Ocupacional, Psicología",
  description = "Espacio especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago. Evaluaciones integrales y tratamientos personalizados en Providencia. ¡Agenda tu consulta!",
  keywords = "fonoaudiología infantil Santiago, terapia ocupacional niños, psicología infantil, espacio terapias infantiles Providencia, evaluación del lenguaje, dificultades del habla, retraso del lenguaje, integración sensorial Santiago",
  image = "/images/comunicar-mas-og.jpg",
  url = "https://www.comunicarmas.cl",
  type = "website",
  noindex = false,
  structuredData
}) => {
  const siteTitle = title.includes("Comunicar Más") ? title : `${title} | Comunicar Más`;
  
  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Comunicar Más - Espacio de Terapias Infantiles" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* SEO directives */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Comunicar Más" />
      <meta property="og:locale" content="es_CL" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Geo tags para SEO local */}
      <meta name="geo.region" content="CL-RM" />
      <meta name="geo.placename" content="Santiago, Chile" />
      <meta name="geo.position" content="-33.4242;-70.6115" />
      <meta name="ICBM" content="-33.4242, -70.6115" />
      
      {/* Datos específicos para Chile */}
      <meta name="country" content="Chile" />
      <meta name="language" content="Spanish" />
      <meta name="distribution" content="local" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS Prefetch para performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Datos estructurados */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO;