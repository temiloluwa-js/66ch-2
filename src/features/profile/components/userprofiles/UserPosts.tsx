import { Link } from "react-router-dom";
import { BlogCard } from "src/components/Elements/BlogCard/BlogCard";
import { useViewProfile } from "../../api/useViewProfile";

export default function UserPosts() {
  const { posts } = useViewProfile();
  return (
    <div className="mx-auto w-11/12 md:my-20 ">
      <h1 className="md:text-3xl text-2xl mb-16 font-bold">ARTICLES</h1>
      {posts && posts.length > 0 ? (
        <article className="grid md:grid-cols-2  lg:grid-cols-3  gap-20">
          {posts!.map((doc) => (
            <Link to={`/post/${doc.id}`} key={doc.id} className="w-fit">
              <BlogCard
                authorName={doc.author.name}
                tag={doc.tag}
                description={doc.description}
                dateCreated={doc.dateCreated}
                imageUrl={doc.imageDownloadUrl}
                postTitle={doc.postTitle}
              />
            </Link>
          ))}
        </article>
      ) : (
        <p>No available posts</p>
      )}
    </div>
  );
}