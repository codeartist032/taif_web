import { BookOpen } from "lucide-react";

const FloatingBlogButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 bg-primary-old-burgundy text-white p-4 rounded-full shadow-2xl hover:shadow-primary-burgundy/50 hover:scale-110 transition-all duration-500 group"
      aria-label="Open Blog"
    >
      <BookOpen className="w-6 h-6 text-primary-peach group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-primary-burgundy">
        اقرأ المدونة
      </span>
    </button>
  );
};

export default FloatingBlogButton;
