import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Desafio</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
