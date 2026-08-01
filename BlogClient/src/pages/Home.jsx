import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import api from "../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (data) => {
    await api.post("/posts", data);
    fetchPosts();
  };

  const updatePost = async (id, data) => {
  await api.put(`/posts/${id}`, data);
  setEditingPost(null);
  fetchPosts();
  };

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <div>
     <PostForm
  onCreate={createPost}
  onUpdate={updatePost}
  editingPost={editingPost}
     />
      <PostList
  posts={posts}
  onDelete={deletePost}
  onEdit={setEditingPost}
     />
    </div>
  );
 
};

export default Home;