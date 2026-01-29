import { personalInfo } from '@/lib/data';

/**
 * Structured data (JSON-LD) for SEO
 * Helps search engines understand the page content
 */
export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    url: 'https://your-domain.com', // TODO: Update with actual domain
    email: personalInfo.email,
    telephone: personalInfo.phone,
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Sotatek - APAC',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ha Noi',
      addressRegion: 'Cau Giay',
      addressCountry: 'VN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Engineering and Technology - VNU',
    },
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Fullstack Development',
      'Frontend Development',
      'Web Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
