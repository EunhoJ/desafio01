import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, Post } from "../store/types";

const PostForm = () => {
  const dispatch = useDispatch();
  const postToEdit = useSelector((state: RootState) => state.posts.postToEdit);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(1);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setBody(postToEdit.body);
      setUserId(postToEdit.userId);
    }
  }, [postToEdit]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const post: Post = {
      id: postToEdit?.id ?? Date.now(),
      title,
      body,
      userId,
    };

    dispatch({ type: "SET_POST_TO_EDIT", payload: null });
    setTitle("");
    setBody("");

    if (postToEdit) {
      dispatch({ type: "UPDATE_POST", payload: post });
      setMessage("Post atualizado com sucesso!");
    } else {
      dispatch({ type: "CREATE_POST", payload: post });
      setMessage("Post criado com sucesso!");
    }
  };

  return (
    <>
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          {postToEdit ? "Editar post" : "Criar novo post"}
        </h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="block w-full mb-2 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          {postToEdit ? "Atualizar" : "Criar"}
        </button>
        {postToEdit && (
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "SET_POST_TO_EDIT", payload: null })
            }
            className="ml-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 cursor-pointer"
          >
            Cancelar
          </button>
        )}
      </form>
    </>
  );
};

export default PostForm;
