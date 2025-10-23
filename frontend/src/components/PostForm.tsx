import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Post } from "../store/types";

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newPost: Post = {
      id: Date.now(),
      title,
      body,
      userId,
    };

    dispatch({ type: 'CREATE_POST', payload: newPost });

    setTitle('');
    setBody('');
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Criar novo post</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <textarea
        placeholder="Conteúdo"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Criar
      </button>
    </form>
  );
};

export default PostForm;
