import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { formatDistance } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  createdAt: Date;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={post.author.image} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-medium leading-none">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <Link href={`/posts/${post.id}`} className="hover:underline">
          <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-4">
        <Link href={`/posts/${post.id}`} className="text-sm font-medium hover:underline">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
}