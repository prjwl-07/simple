import React from 'react';
import Head from 'next/head';
import { posts } from '../data/posts';
import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Simple Next.js Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="site-header">
        <h1>Tech Insights Blog</h1>
        <p>A simple blog built with Next.js featuring dynamic routes.</p>
      </header>

      <main className="posts-container">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            description={post.description}
          />
        ))}
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Tech Insights Blog. Practical Exam Submission.</p>
      </footer>
    </div>
  );
}
