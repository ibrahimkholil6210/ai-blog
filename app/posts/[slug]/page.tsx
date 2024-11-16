import { getPostBySlug } from "@/lib/posts";
import { CodeBlock } from "@/components/code-block";
import { notFound } from "next/navigation";
import { format } from "date-fns";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <time dateTime={post.createdAt.toISOString()}>
            {format(post.createdAt, "LLLL d, yyyy")}
          </time>
          <div className="flex items-center space-x-2">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-8">
        {post.content}
      </div>
    </article>
  );
}