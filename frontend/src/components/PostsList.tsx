import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Post } from "../store/types";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_POSTS" });
  }, [dispatch]);

  const posts = useSelector((state: { posts: Post[] }) => state.posts);

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Posts</h2>
      {posts.lenght == 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-700">{post.body}</p>
              <p className="text-xs text-gray-500">Autor: {post.userId}</p>
              <button
                onClick={() => handleDelete(post.id)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
