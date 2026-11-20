import { Link } from "react-router-dom";

import StoryNavigation from "../../components/StoryNavigation/StoryNavigation";
import blogPosts from "../../data/blogPosts";

import "./Blog.css";

function Blog() {
  return (
    <>
      <StoryNavigation />

      <main className="blog">
        <h1 className="blog__title">Stories from Montenegro</h1>

        <p className="blog__intro">
          Explore Montenegro through its history, art, landscapes, and local
          stories.
        </p>

        <section className="blog__posts">
          {blogPosts.map((post) => (
            <Link
              className="blog__card-link"
              to={`/blog/${post.slug}`}
              key={post.id}
            >
              <article className="blog__card">
                <img
                  className="blog__card-image"
                  src={post.image}
                  alt={post.imageAlt}
                />
                <p className="blog__category">{post.category}</p>
                <h2 className="blog__card-title">{post.title}</h2>
                <p className="blog__excerpt">{post.excerpt}</p>
                <p className="blog__date">{post.date}</p>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export default Blog;
