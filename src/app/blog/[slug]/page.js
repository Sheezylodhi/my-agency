import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const canonicalUrl = `https://webmashlabs.com/blog/${post.slug}`;
  const keywordsList = [post.primaryKeyword, ...(post.secondaryKeywords || [])].filter(Boolean);

  return {
    title,
    description,
    keywords: keywordsList,
    authors: post.author ? [{ name: post.author, url: post.authorUrl }] : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'WebMash Labs',
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      authors: post.author ? [post.author] : undefined,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.coverImageAlt || title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate connected JSON-LD Structured Data graphs
  const siteUrl = 'https://webmashlabs.com';
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'WebMash Labs',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
    },
  };

  const webSiteSchema = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'WebMash Labs',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  };

  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${articleUrl}#webpage`,
    url: articleUrl,
    name: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    breadcrumb: {
      '@id': `${articleUrl}#breadcrumb`,
    },
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${articleUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const blogPostingSchema = {
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage ? [post.coverImage] : undefined,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    mainEntityOfPage: {
      '@id': `${articleUrl}#webpage`,
    },
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author,
          url: post.authorUrl,
        }
      : {
          '@type': 'Organization',
          name: 'WebMash Labs',
          '@id': `${siteUrl}/#organization`,
        },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    articleSection: post.category || 'Technology',
    keywords: [post.primaryKeyword, ...(post.secondaryKeywords || [])].filter(Boolean).join(', '),
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, webSiteSchema, webPageSchema, breadcrumbSchema, blogPostingSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600 dark:text-gray-400 py-15">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
              <li>/</li>
              <li>
                <span className="truncate max-w-xs inline-block align-bottom" aria-current="page">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              {post.datePublished && (
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {post.category && <span>• {post.category}</span>}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {post.title}
            </h1>

            {post.author && (
              <div className="flex items-center space-x-3 mt-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {post.authorUrl ? (
                      <Link href={post.authorUrl} className="hover:underline">
                        {post.author}
                      </Link>
                    ) : (
                      post.author
                    )}
                  </p>
                  {post.authorRole && (
                    <p className="text-xs text-gray-500">{post.authorRole}</p>
                  )}
                </div>
              </div>
            )}
          </header>

          {post.coverImage && (
            <div className="mb-8 relative w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}

          {/* Table of Contents if available */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <nav aria-label="Table of Contents" className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                {post.tableOfContents.map((heading, idx) => (
                  <li
                    key={idx}
                    style={{ paddingLeft: heading.level === 3 ? '1rem' : heading.level === 4 ? '2rem' : '0' }}
                  >
                    <a href={`#${heading.id}`} className="hover:underline text-blue-600 dark:text-blue-400">
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Article Body Content Render */}
          <div className="prose dark:prose-invert max-w-none space-y-6">
            {post.content && Array.isArray(post.content) ? (
              post.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={index}>{block.text}</p>;
                  case 'heading':
                    const HeadingTag = `h${block.level || 2}`;
                    const headingId = block.id || block.text?.toLowerCase().replace(/[^\w]+/g, '-');
                    return (
                      <HeadingTag key={index} id={headingId} className="font-bold tracking-tight">
                        {block.text}
                      </HeadingTag>
                    );
                  case 'list':
                    const ListTag = block.ordered ? 'ol' : 'ul';
                    return (
                      <ListTag key={index} className="list-inside space-y-1">
                        {block.items?.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ListTag>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic my-4">
                        {block.text}
                      </blockquote>
                    );
                  case 'code':
                    return (
                      <pre key={index} className="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto">
                        <code>{block.code}</code>
                      </pre>
                    );
                  default:
                    return null;
                }
              })
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>

         <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-8">
            {/* Related Services */}
            {post.relatedServices && post.relatedServices.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Related Services</h3>
                <ul className="flex flex-wrap gap-2">
                  {post.relatedServices.map((service, idx) => {
                    const serviceUrl = typeof service === 'string' ? `/services/${service}` : (service?.url || '#');
                    const serviceName = typeof service === 'string' ? service.replace(/-/g, ' ') : (service?.name || service);
                    return (
                      <li key={idx}>
                        <Link
                          href={serviceUrl}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-sm hover:underline capitalize"
                        >
                          {serviceName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Related Industries */}
            {post.relatedIndustries && post.relatedIndustries.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Related Industries</h3>
                <ul className="flex flex-wrap gap-2">
                  {post.relatedIndustries.map((industry, idx) => {
                    const industryUrl = typeof industry === 'string' ? `/industries/${industry}` : (industry?.url || '#');
                    const industryName = typeof industry === 'string' ? industry.replace(/-/g, ' ') : (industry?.name || industry);
                    return (
                      <li key={idx}>
                        <Link
                          href={industryUrl}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm hover:underline capitalize"
                        >
                          {industryName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Related Articles */}
            {post.relatedArticles && post.relatedArticles.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.relatedArticles.map((article, idx) => {
                    const articleSlug = typeof article === 'string' ? article : (article?.slug || '');
                    const articleTitle = typeof article === 'string' ? article.replace(/-/g, ' ') : (article?.title || article);
                    const articleExcerpt = typeof article === 'object' ? article?.excerpt : '';
                    return (
                      <Link
                        key={idx}
                        href={`/blog/${articleSlug}`}
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition"
                      >
                        <h4 className="font-medium text-base mb-1 capitalize">{articleTitle}</h4>
                        {articleExcerpt && (
                          <p className="text-xs text-gray-500 line-clamp-2">{articleExcerpt}</p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </footer>
        </article>
      </main>
    </>
  );
}