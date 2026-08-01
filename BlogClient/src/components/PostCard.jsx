const PostCard = ({ post, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>{new Date(post.createdDate).toLocaleString()}</small>

      <br />
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
};

export default PostCard;