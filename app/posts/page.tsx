import { getPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Technical articles, code snippets, and development insights.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}