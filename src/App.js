import PostsList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="py-5">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
