import React from 'react';
import Link from 'next/link';

// Reusable BlogCard component receiving blog details via props
export default function BlogCard({ id, title, author, description }) {
  return (
    <div className="blog-card">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <p className="blog-desc">{description}</p>
      <Link href={`/blog/${id}`} className="read-btn">
        Read More &rarr;
      </Link>
    </div>
  );
}
