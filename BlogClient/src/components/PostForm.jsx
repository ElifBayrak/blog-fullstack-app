import { useEffect, useState } from "react";

const PostForm = ({ onCreate, onUpdate, editingPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPost) {
      onUpdate(editingPost.id, { title, content });
    } 
    else {
      onCreate({ title, content });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingPost ? "Edit Post" : "Create Post"}</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <br />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <br />
      <button type="submit">
        {editingPost ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default PostForm;