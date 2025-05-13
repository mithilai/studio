import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/cards/blog-post-card';

export function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Latest <span className="text-primary">Insights</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Dive into my thoughts on AI, technology, and research.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
