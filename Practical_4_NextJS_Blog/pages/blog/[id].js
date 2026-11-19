import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { posts } from '../../data/posts';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find post matching the dynamic [id] parameter
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Post Not Found</h2>
          <p>The requested blog article does not exist.</p>
          <Link href="/" className="back-link">&larr; Return to All Posts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>{post.title} - Tech Insights Blog</title>
      </Head>

      <article className="post-detail-card">
        <Link href="/" className="back-link">&larr; Back to All Posts</Link>
        <h1 className="detail-title">{post.title}</h1>
        <p className="detail-meta">Published by <strong>{post.author}</strong></p>
        <div className="detail-summary">
          <em>{post.description}</em>
        </div>
        <div className="detail-content">
          <p>{post.content}</p>
        </div>
      </article>

      <footer className="site-footer">
        <p>&copy; 2026 Tech Insights Blog. Practical Exam Submission.</p>
      </footer>
    </div>
  );
}
