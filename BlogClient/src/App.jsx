import { useEffect, useState } from "react";
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  // 🔹 get posts
  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 🔹 add
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updatePost(editingId, {
        id: editingId,
        title,
        content,
      });
      setEditingId(null);
    } else {
      await createPost({ title, content });
    }

    setTitle("");
    setContent("");
    fetchPosts();
  };

  // 🔹 delete
  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  // 🔹 update
  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingId(post.id);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Blog App</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="İçerik"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">
          {editingId ? "Güncelle" : "Ekle"}
        </button>
      </form>

      <hr />

      {/* LIST */}
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: 20 }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <button onClick={() => handleEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
}

export default App;