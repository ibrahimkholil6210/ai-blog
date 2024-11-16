import { PostCard } from '@/components/post-card';
import { getPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Share Your Code & Knowledge
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A modern platform for developers to share code snippets and technical insights. 
            Built with Next.js and powered by cutting-edge technologies.
          </p>
        </div>
      </section>

      <section className="container grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}