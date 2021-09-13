import TotalPosts from './components/TotalPosts'
import TotalPages from './components/TotalPages'
import TotalAuthors from './components/TotalAuthors'
import TotalTags from './components/TotalTags'
import PublishedPosts from './components/PublishedPosts'
import PostsChart from './components/PostsChart'

function App() {
  return (
    <div>
      <TotalPosts />
      <TotalPages />
      <TotalAuthors />
      <TotalTags />
      <PublishedPosts />
      <PostsChart />
    </div>
  );
}

export default App;
