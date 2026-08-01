import PostCard from "./PostCard";

const PostList = ({ posts, onDelete, onEdit }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default PostList;