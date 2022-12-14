import React from "react";
import { BlogCard } from "src/components/Elements/BlogCard/BlogCard";
import { usePostContext, useUserContext } from "src/context";

export default function UserPosts() {
  const { user } = useUserContext()!;
  const { data } = usePostContext()!;
  const userPosts = data?.filter((doc) => doc.author.id === user?.uid);
  return (
    <div className="mx-auto md:w-11/12 w-full md:my-20 p-2">
      <h1
        className="md:text-4xl text-2xl font-supreme
       my-8   font-bold"
      >
        ARTICLES
      </h1>
      {userPosts && userPosts.length > 0 ? (
        <article className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 grid-cols-1">
          {userPosts!.map((doc) => (
            <React.Fragment key={doc.id}>
              <BlogCard
                authorName={doc.author.name}
                authorId={doc.author.id}
                tag={doc.tag}
                description={doc.description}
                dateCreated={doc.dateCreated}
                imageUrl={doc.imageDownloadUrl}
                postTitle={doc.postTitle}
                postId={doc.id}
              />
            </React.Fragment>
          ))}
        </article>
      ) : (
        <p>No available posts</p>
      )}
    </div>
  );
}
