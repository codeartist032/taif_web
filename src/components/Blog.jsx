import { X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "../constants/blogData";

const Blog = ({ isOpen, onClose }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (!isOpen) return null;

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const handleClose = () => {
    setSelectedPost(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-start justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative bg-primary-old-burgundy rounded-xl shadow-2xl border border-primary-mauve/40 w-full max-w-6xl my-8">
            {/* Header */}
            <div className="sticky top-0 bg-primary-old-burgundy border-b border-primary-mauve/30 px-6 py-4 flex items-center justify-between rounded-t-xl z-10">
              <div className="flex items-center gap-4">
                {selectedPost && (
                  <button
                    onClick={handleBack}
                    className="p-2 hover:bg-primary-peach rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-primary-old-burgundy" />
                  </button>
                )}
                <h2 className="text-3xl font-bold text-primary-old-burgundy">
                  {selectedPost ? selectedPost.title : "مدونة التسويق"}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-primary-peach rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!selectedPost ? (
                // Blog Posts Grid
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-primary-old-burgundy rounded-lg overflow-hidden border border-primary-mauve/40 hover:border-primary-burgundy transition-all duration-300 hover:shadow-lg hover:shadow-primary-burgundy/10"
                    >
                      {/* Post Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        {/* Category and Date */}
                        <div className="flex items-center justify-between mb-3 text-sm">
                          <span className="bg-primary-burgundy/10 text-primary-burgundy px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-primary-cream/60">
                            {post.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 hover:text-primary-burgundy transition-colors text-primary-cream">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-primary-cream/70 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Author and Read More */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-primary-cream/60">
                            بواسطة {post.author}
                          </span>
                          <button
                            onClick={() => handlePostClick(post)}
                            className="text-primary-burgundy hover:text-primary-old-burgundy font-semibold transition-colors"
                          >
                            اقرأ المزيد ←
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                // Blog Post Detail View
                <div className="max-w-4xl mx-auto">
                  {/* Post Image */}
                  <div className="h-96 rounded-lg overflow-hidden mb-8">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Post Meta */}
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="bg-primary-burgundy/10 text-primary-burgundy px-4 py-2 rounded-full">
                      {selectedPost.category}
                    </span>
                    <span className="text-primary-cream/60">
                      {selectedPost.date}
                    </span>
                    <span className="text-primary-cream/60">
                      بواسطة {selectedPost.author}
                    </span>
                  </div>

                  {/* Post Content */}
                  <div className="prose prose-invert prose-orange max-w-none">
                    <div className="text-primary-cream leading-relaxed whitespace-pre-line text-lg">
                      {selectedPost.content}
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="mt-8 pt-8 border-t border-primary-mauve/30">
                    <button
                      onClick={handleBack}
                      className="bg-primary-old-burgundy text-white px-6 py-3 rounded-lg hover:bg-primary-burgundy hover:shadow-lg hover:shadow-primary-burgundy/50 transition-all duration-500"
                    >
                      ← العودة إلى المدونة
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
