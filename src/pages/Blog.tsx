
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BlogPost, { Post } from "../components/BlogPost";

const posts: Post[] = [
  {
    id: "future-of-ai",
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build and maintain software applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    date: "October 15, 2023",
    readTime: "8 min read",
    category: "AI"
  },
  {
    id: "ux-design-principles",
    title: "Essential UX Design Principles for Modern Applications",
    excerpt: "Key design principles that can significantly improve user experience and engagement in digital products.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    date: "September 28, 2023",
    readTime: "6 min read",
    category: "Design"
  },
  {
    id: "cloud-security",
    title: "Cloud Security Best Practices for Enterprise Applications",
    excerpt: "Comprehensive guide to implementing robust security measures for cloud-based enterprise applications.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
    date: "September 12, 2023",
    readTime: "10 min read",
    category: "Security"
  },
  {
    id: "microservices",
    title: "Adopting Microservices Architecture: Benefits and Challenges",
    excerpt: "An in-depth look at the advantages and potential pitfalls of migrating to a microservices architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    date: "August 29, 2023",
    readTime: "7 min read",
    category: "Architecture"
  },
  {
    id: "typescript-tips",
    title: "Advanced TypeScript Tips for React Developers",
    excerpt: "Practical TypeScript techniques to enhance type safety and developer experience in React applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    date: "August 15, 2023",
    readTime: "9 min read",
    category: "Development"
  },
  {
    id: "performance-optimization",
    title: "Web Performance Optimization Techniques",
    excerpt: "Strategies and tools to improve the loading speed and runtime performance of web applications.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    date: "July 22, 2023",
    readTime: "5 min read",
    category: "Performance"
  }
];

const categories = Array.from(new Set(posts.map(post => post.category)));

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Blog & Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our latest thoughts on technology, design, and innovation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogPost key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default Blog;
