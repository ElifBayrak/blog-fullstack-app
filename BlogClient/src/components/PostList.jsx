import PostCard from "./PostCard";

const PostList = ({ posts, onDelete }) => {
  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;