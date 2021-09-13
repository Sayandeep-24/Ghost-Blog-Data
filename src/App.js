import TotalPosts from './components/TotalPosts'
import TotalPages from './components/TotalPages'
import TotalAuthors from './components/TotalAuthors'
import TotalTags from './components/TotalTags'
import PublishedPosts from './components/PublishedPosts'




function App() {
  return (
    <div>
      <TotalPosts />
      <TotalPages />
      <TotalAuthors />
      <TotalTags />
      <PublishedPosts />
    </div>
  );
}

export default App;
