import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, Post } from "../store/types";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.list);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_POSTS" });
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleEdit = (post: Post) => {
    dispatch({ type: "SET_POST_TO_EDIT", payload: post });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_POST", payload: id });
    setMessage("Post deletado com sucesso!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Posts</h2>
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}

      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-700">{post.body}</p>
              <p className="text-xs text-gray-500">Autor: {post.userId}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                >
                  Deletar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
