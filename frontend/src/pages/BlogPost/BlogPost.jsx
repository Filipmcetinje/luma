import { Link, useParams } from "react-router-dom";

import blogPosts from "../../data/blogPosts";

import "./BlogPost.css";

function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((currentPost) => currentPost.slug === slug);

  if (!post) {
    return (
      <main className="blog-post">
        <h1>Story not found</h1>

        <Link className="blog-post__back-link" to="/blog">
          Back to stories
        </Link>
      </main>
    );
  }

  return (
    <main className="blog-post">
      <Link className="blog-post__back-link" to="/blog">
        ← Back to stories
      </Link>

      <p className="blog-post__category">{post.category}</p>
      <h1 className="blog-post__title">{post.title}</h1>
      <p className="blog-post__date">{post.date}</p>
      <p className="blog-post__intro">{post.excerpt}</p>
    </main>
  );
}

export default BlogPost;
