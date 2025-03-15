
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogPostProps {
  post: Post;
  index: number;
}

const BlogPost = ({ post, index }: BlogPostProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <div className="image-blur-wrapper absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? "image-blur loaded" : "image-blur"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-white backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" /> {post.date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" /> {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex mt-auto items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPost;
